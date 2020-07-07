/* global DOM, html */
import DOM from './vendor/fauxdom.js';


const IGNORED_ELEMENTS = ['STYLE', 'SCRIPT', 'META', 'LINK'];
const CONTAINER_ELEMENTS= [
  'ADDRESS','ARTICLE','ASIDE','BLOCKQUOTE', 'CENTER',
  'DETAILS','DIALOG','DD','DIV','DL','DT',
  'FIELDSET','FIGCAPTION','FIGURE','FOOTER','FORM',
  'H1','H2','H3','H4','H5','H6','HEADER','HGROUP','HR',
  'LI','MAIN','NAV','OL','P','PRE','SECTION',
  'TABLE','TBODY','TD','TH','THEAD','TR','UL'
];

class SIMP {
  constructor(html) {
    this.html = html;
    this.doc = new DOM(html);
    this.simp = listRecurse(this.doc.body);
  }
  render() {
    return render(this.simp);
  }
  find(stringOrRegex) {
    return this.start().find(stringOrRegex);
  }
  after(stringOrRegex) {
    return this.start().find(stringOrRegex).next();
  }
  start() {
    return this._sst = new SIMPState(this);
  }
  continue() {
    return this._sst;
  }
  next() {
    return this._sst.next();
  }
  entries() {
    return entries(this.simp).entries()
  }
}
class SIMPState {
  constructor(simpObject) {
    this.simpObject = simpObject;
    this.simpent = entries(simpObject.simp);
    this.ptr = 0;
  }
  find(stringOrRegex, opts = {}) {
    // noThrow: Don't through if fails to find the object (returns null)
    // lookAhead: Don't update this.ptr on match, return true/null on match/no-match
    // withinBlock: don't search past the current block (prefix) boundary
    let { noThrow, lookAhead, withinBlock } = opts;

    noThrow = lookAhead;

    const match = makeMatcher(stringOrRegex);

    const boundary = withinBlock ? this.simpent[this.ptr].pre : '';

    let matched;
    for (let i=this.ptr; i<this.simpent.length; i++) {
      const e=this.simpent[i];
      const matchStr = e.rem || e.c || '';

      if (boundary && !e.pre.startsWith(boundary)) break;

      if (match(matchStr)) {
        matched = i;
        break;
      }
    }

    if (matched !== undefined) {
      if (lookAhead) {
        return true;
      }

      this.ptr = matched;
      return this;
    }

    if (noThrow) return null;

    throw new Error(
      'Not found: '
      + JSON.stringify(stringOrRegex)
      + (boundary ? ' within '+boundary : '')
    );
  }
  tryFind(stringOrRegex) {
    return this.find(stringOrRegex, { noThrow: true });
  }
  has(stringOrRegex) {
    return this.find(stringOrRegex, { lookAhead: true, withinBlock: true });
  }
  back() {
    if (this.ptr>0) this.ptr-=1;
    return this;
  }
  next() {
    this.ptr+=1;
    if (this.ptr>this.simpent.length) throw new Error('end of content reached');
    return this;
  }
  nextImage(stringOrRegex) {
    const match = makeMatcher(stringOrRegex);

    while (this.ptr<this.simpent.length) {
      this.ptr+=1;
      const emt = this.simpent[this.ptr];
      if (emt.image && match(emt.image)) return this;
    }

    throw new Error('end of content reached');
  }
  nextBlock() {
    const prefix = this.simpent[this.ptr].pre;
    console.log(this.simpent.map(r => r.pre).join('\n'))
    console.log(this.ptr)

    const bndIdx = prefix.lastIndexOf('~');
    const boundary = bndIdx>0 ? prefix.substr(0, bndIdx) : '';

    while (this.ptr>0) {
      this.ptr += 1;
      const e = this.simpent[this.ptr];
      if (!e.pre.startsWith(boundary)) break;
    }
    console.log(boundary, '->', this.ptr, this.simpent[this.ptr].pre)
    return this;
  }
  content() {
    const emt = this.simpent[this.ptr];
    return typeof emt === 'string' ? emt : emt.c;
  }
  allContent(limit) {
    const startContent = this.ptr;

    this.nextBlock();
    const endContent = this.ptr;

    const ret = []
    this.ptr = startContent;
    while (this.ptr < endContent) {
      ret.push(this.content());

      this.ptr += 1;

      if (ret.length == limit) break;
    }

    return ret;
  }
  image() {
    const emt = this.simpent[this.ptr];
    return emt.image;
  }
  link() {
    const emt = this.simpent[this.ptr];
    return emt.link;
  }
  toJSON() {
    const emt = this.simpent[this.ptr];
    return JSON.stringify({ptr:this.ptr, emt});
  }
}

// Generate simplified HTML document representation
export function parse(html) {
  return new SIMP(html);
}

export default { parse };



function listRecurse(l,ll=0) {
  let ln = ll+1;

  let r = [];
  for (let c of l.childNodes) {
    if(c.nodeName == '#text') {
      const txt = text(c,ll);
      if (txt) r.push(txt)
    } else if (IGNORED_ELEMENTS.includes(c.nodeName)) {
      //ignore
    } else if (CONTAINER_ELEMENTS.includes(c.nodeName)) {
      let rec = listRecurse(c,ln);
      if (rec.length === 1 && typeof rec[0]=='object' && 'p' in rec[0]) {
        // prepend current path
        rec[0].p = c.nodeName + '/' + rec[0].p
        r.push( rec[0] );
      } else {
        // only keep if contents are not empty
        if (!Array.isArray(rec) || rec.length>0) {
          r.push({ p: c.nodeName, c: rec.length === 1 ? rec[0] : rec });
        }
      }
    } else if (c.nodeName == '#comment') {
      r.push({ rem: text(c,ln) })
    // Links
    } else if (c.nodeName == 'A') {
      const link = c.getAttribute('href');
      let rec = listRecurse(c,ln);
      if (rec.length === 1 && typeof rec[0] == 'object') {
        rec[0].link = link;
        r.push(rec[0]);
      } else {
        r.push({ p: c.nodeName, c: text(c,ln), link, rec })
      }
    // Images
    } else if (c.nodeName == 'IMG') {
      const image = c.attributes.src || '';
      // Fauxdom returns 'true' for empty attribute values
      const alt = typeof c.attributes.alt === 'string' ? c.attributes.alt : '';

      if (image.match(/spacer.*(gif|png)/i)) continue; //ignore

      r.push({ p: c.nodeName, c: alt, image })
    // BR
    } else if (c.nodeName == 'BR') {
      r.push('\n');

    // Inline content
    } else {
      const rec = text(c,ln);
      if (rec) r.push(rec)
      //r.push({ p: c.nodeName, c: text(c,ln) })
    }
  }
  return r;
}


function text(node, depth) {
  const cont = node.textContent.replace(/&nbsp;|&#xA0;|\s+/ig,' ').trim();
  return cont;
}


function render(simp) {
  if (simp == '\n') return '¶<br>';
  if (typeof simp == 'string') return `<span>${simp}</span>`;
  if (typeof simp === 'object' && !Array.isArray(simp)) {
    if (simp.rem) {
      return `<i>${escape(simp.rem)}</i>`;
    }
    let ret = '';
    if (simp.c) ret+=render(simp.c);
    if (simp.link) {
      ret+=`<a href="${simp.link}">[link]</a>`;
    }
    if (simp.image) {
      ret+=`<a href="${simp.image}">[image]</a>`;
    }


    return ret;
  }

  let ret = ''
  for (let e of simp) {
    if (e.p) {
      ret += `<div><label>${e.p}</label>${render(e)}</div>\n`;
    } else {
      ret += render(e);
    }
  }
  return ret;
}

function escape(str) {
  return str.replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


function entries(simp, prefix = '') {
  if (typeof simp == 'string') {
    simp = { c: simp };
  }

  if (Array.isArray(simp)) {
    const ent = [];
    let i = 0;
    for (let e of simp) {
      if (Array.isArray(e.c)) {
        const pre = (prefix || '') + (prefix && e.p ? '~' : '') + (e.p || '') + `[${i}]`;

        ent.push(...entries(e.c, pre));
      } else {
        ent.push(entries(e, prefix));
      }
      ++i;
    }
    return ent;
  }

  simp.pre = (prefix || '') + (prefix && simp.p ? '~' : '') + (simp.p || '');

  return simp;
}

function makeMatcher(stringOrRegex) {
  if (!stringOrRegex) return () => true; //no-op

  if (typeof stringOrRegex == 'object' && stringOrRegex instanceof RegExp) {
    return (str) => stringOrRegex.test(str);
  }

  return (str) => str.includes(stringOrRegex);
}
