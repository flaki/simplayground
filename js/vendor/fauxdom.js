const e={},t={},s=Object.prototype.hasOwnProperty.bind(t),i=null;class r{constructor(e){if(this.index=0,this.str=e,this.scanChar=this.str[this.index],!s(" ")){for(let e=0;e<=32;e++)t[String.fromCharCode(e)]=null;for(let e=128;e<=159;e++)t[String.fromCharCode(e)]=null}}isWhiteSpace(e){return e!==i&&s(e)}goToString(t,s){if(!1!==s)this.index=this.str.indexOf(t,this.index);else{e[t]||(e[t]=new RegExp(t,"ig")),e[t].lastIndex=this.index;const s=e[t].exec(this.str);this.index=s?s.index:-1}this.index>-1?this.scanChar=this.str[this.index]:(this.index=this.str.length,this.scanChar=i)}goToIndex(e){this.scanChar=this.str[this.index=e]}advance(e){return this.index+=e,this.index>this.str.length?(this.index=this.str.length,this.scanChar=i):this.scanChar=this.str[this.index]}match(e,t){var s=this.str.substr(this.index,e.length);return!1===t&&(e=e.toLowerCase(),s=s.toLowerCase()),s===e&&(this.index+=e.length-1,this.getNextChar(),!0)}peek(){return this.str[this.index+1]}getChar(){return this.scanChar}getNextChar(){return this.index+1<this.str.length?this.scanChar=this.str[++this.index]:(this.index=this.str.length,this.scanChar=i)}getNextAfterWhiteSpace(){var e;do{e=this.getNextChar()}while(e!==i&&s(e));return e}skipWhiteSpace(){for(var e=this.scanChar;e!==i&&s(e);)e=this.getNextChar();return this.scanChar}}const n=Symbol("doctype"),o=Symbol("head"),h=Symbol("body"),a=Symbol("documentElement"),l=Symbol("nodeType"),c=Symbol("parentNode"),d=Symbol("ownerDocument"),N=Symbol("tagName"),u=Symbol("parserOptions"),p=/\s+/g,E={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},f={AREA:!0,BASE:!0,BR:!0,COL:!0,COMMAND:!0,EMBED:!0,HR:!0,IMG:!0,INPUT:!0,KEYGEN:!0,LINK:!0,META:!0,PARAM:!0,SOURCE:!0,TRACK:!0,WBR:!0};function T(e){var t=-1,s=-1,i="HTML";e[n]&&e[u].allowCustomRootElement&&(i=e[n].name.toUpperCase());for(let r=0,n=e.childNodes.length;r<n;r++){if(e.childNodes[r].tagName===i){s=r,e[l]=E.DOCUMENT_NODE,e[a]=e.childNodes[r],e[o]=e[h]=null;for(let t=0;t<e[a].childNodes.length;t++){const s=e[a].childNodes[t];switch(s.tagName){case"HEAD":e[o]=s;break;case"BODY":case"FRAMESET":e[h]=s}if(e[o]&&e[h])break}if(-1!==t){const i=e[o]||e[h]||e[a],r=s-t;for(let r=t;r<s;r++)x(e.childNodes[r],i);i.childNodes.splice(0,0,...e.childNodes.splice(t,r)),s-=r,n-=r}if(s<n-1){const t=e[h]||e[o]||e[a];for(let i=s+1;i<n;i++)x(e.childNodes[i],t);t.childNodes.splice(t.childNodes.length,0,...e.childNodes.splice(s+1))}break}-1===t&&e.childNodes[r].nodeType===E.ELEMENT_NODE&&(t=r)}}function g(e){const t=e[d]||e.getRootNode();return t[l]===E.DOCUMENT_NODE||t[l]===E.DOCUMENT_FRAGMENT_NODE?t:null}function O(e){if(e&&e.length>0)for(let t=0;t<e.length;t++)x(e[t],null)}function x(e,t){const s=null!==t?g(t):null;e[d]!==s&&e.hasChildNodes()&&e.forEach(e=>{e[d]=s},null),e[c]=t,e[d]=s}function C(e){if(!e.global){let t=e.flags;e=new RegExp(e.source,t+"g")}return e}const m=Symbol("element"),D=Symbol("length"),y=/^\S+$/,b=Array.prototype.indexOf,_=Array.prototype.join,S=Array.prototype.splice;class M{constructor(){throw new Error("Cannot directly instantiate DOMTokenList.")}get length(){return this[D]}set length(e){}get value(){return _.call(this," ")}set value(e){if(this[D]>0)for(var t in this)this.hasOwnProperty(t)&&isFinite(t)&&delete this[t];this[D]=0,"string"==typeof e?this.add.apply(this,e.split(p)):delete this[m].attributes.class}add(){for(var e=0;e<arguments.length;e++)-1===b.call(this,arguments[e])&&this.supports(arguments[e])&&(this[this[D]++]=arguments[e]);this[m].attributes.class=this.value}remove(){for(var e,t=0;t<arguments.length;t++)-1!==(e=b.call(this,arguments[t]))&&(S.call(this,e,1),this[D]--);this[m].attributes.class=this.value}item(e){if("number"==typeof e&&e>=0&&e<this[D])return this[e]}toggle(e,t){var s=!1;if(this.supports(e)){var i=b.call(this,e);-1!==i&&!0!==t?(S.call(this,i,1),this[D]--):!1!==t&&(s=!0,-1===i&&(this[this[D]++]=e)),this[m].attributes.class=this.value}return s}contains(e){return-1!==b.call(this,e)}replace(e,t){var s=b.call(this,e);return!!(s>=0&&this.supports(t))&&(-1===b.call(this,t)?this[s]=t:(S.call(this,s,1),this[D]--),this[m].attributes.class=this.value,!0)}supports(e){return!(!e||"string"!=typeof e)&&e.match(y)}}const A=/\r\n|\r|\f/g,I=/\(\s*(even|odd|(?:(?:([+-]?\d*)n)\s*(?:([+-])\s*(\d+))?|([+-]?\d+)))\s*/g,w={Selectors:0,Identifier:1,Iterator:2,IteratorOf:3},R={is:w.Selectors,not:w.Selectors,where:w.Selectors,has:w.Selectors,lang:w.Identifier,dir:w.Identifier,"nth-child":w.IteratorOf,"nth-last-child":w.IteratorOf,"nth-of-type":w.Iterator,"nth-last-of-type":w.Iterator,"nth-col":w.Iterator,"nth-last-col":w.Iterator};function v(e){return function e(t,s=i,r=!1){var n=t.skipWhiteSpace(),o={},h=[],a=[h],l=[a];for(;n!==i&&n!==s;){switch(n){case"*":if(h.length>0)throw U("Universal selectors must come before all other simple selectors.",t);o.type="universal",h.push(o),o={};break;case"#":case".":{t.getNextChar();const e=P(t);if(!e)throw U("Expected an identifier.",t);o.type="#"===n?"id":"class",o.name=e,h.push(o),o={};break}case"[":{t.getNextAfterWhiteSpace();const e=P(t);if(!e)throw U("Expected an identifier.",t);if(o.type="attr",o.name=e,o.comparison="=",o.value=!0,o.ignoreCase=!1,"]"!==(n=t.getNextAfterWhiteSpace())){switch(n){case"=":break;case"~":case"|":case"^":case"$":case"*":if("="!==t.peek())throw U("Expected '='.",t,1);o.comparison=n+o.comparison,t.getNextChar();break;default:throw U("Unexpected character '"+(n===i?"END_OF_INPUT":n)+"'.",t)}if("'"===(n=t.getNextAfterWhiteSpace())||'"'===n){const e=n;for(o.value="",n=t.getNextChar();n!==i&&n!==e&&"\n"!==n;)"\\"===n?(o.value+=k(t),n=t.getChar()):(o.value+=n,n=t.getNextChar())}else{const e=P(t);if(!e)throw U("Expected an identifier.",t);o.value=e}if("]"!==t.getNextAfterWhiteSpace()){const e=P(t);if("i"===e||"I"===e)o.ignoreCase=!0;else if("s"===e||"S"===e)o.ignoreCase=!1;else if(e)throw U("Unexpected identifier '"+e+"'.",t,1-e.length);if("]"!==t.getNextAfterWhiteSpace())throw U("Expected ']'.",t,-1+e.length)}}h.push(o),o={};break}case":":if(t.getNextChar(),t.match(":")){const e=P(t);if(!e)throw U("Expected a pseudo-element name.",t);o.type="pseudo-element",o.name=e}else{const s=P(t);if(!s)throw U("Expected a pseudo-class name.",t);o.type="pseudo-class",o.name=s;const i=R[s];if(null!=i){if(o.type="pseudo-fn","("!==t.getNextChar())throw U("Expected '('.",t);switch(i){case w.IteratorOf:case w.Iterator:let s,r=0,n=0;I.lastIndex=t.index;const h=I.exec(t.str);if(!h)throw U("Invalid parameter.",t,1);if(t.advance(h[0].length),i===w.IteratorOf){t.skipWhiteSpace();const i=t.index;if("of"===P(t).toLowerCase()){const i=t.getNextChar();if(")"!==i&&!t.isWhiteSpace(i))throw U("Expected whitespace.",t);if(!((s=e(t,")"))instanceof Array)||0===s.length)throw U("Expected at least one selector.",t)}else t.goToIndex(i)}if(")"!==t.skipWhiteSpace())throw U("Expected ')'.",t);"even"===h[1]||"odd"===h[1]?(r=2,"odd"===h[1]&&(n=1)):h[5]?n=parseInt(h[5],10):(r="-"===h[2]?-1:h[2]&&"+"!==h[2]?parseInt(h[2],10):1,h[3]&&(n=parseInt(h[3]+h[4],10))),o.params=[r,n],s&&o.params.push(s);break;case w.Selectors:if(t.getNextChar(),o.params=e(t,")",!0),0===o.params.length)throw U("Expected at least one selector.",t);break;case w.Identifier:if(!W(t.getNextAfterWhiteSpace()))throw U("Expected an identifier.",t);o.params=[P(t)],t.getNextChar()}if(")"!==t.skipWhiteSpace())throw U("Expected ')'.",t)}else"before"!==s&&"after"!==s&&"first-line"!==s&&"first-letter"!==s||(o.type="pseudo-element")}h.push(o),o={};break;case"+":case">":case"~":if(0===h.length){if(1===a.length){if(!r)throw U("Absolute selectors cannot start with a combinator.",t);a.unshift([{type:"pseudo-class",name:"scope"}])}else if("string"==typeof a[a.length-2])throw U("Cannot have multiple combinators in a row.",t);a.splice(a.length-1,0,n)}else a.push(n,h=[]);break;case",":if(0===h.length){if(a.length>1){if(a.pop(),"string"==typeof a[a.length-1])throw U("Complex selectors are not allowed to end with a combinator.",t,-1);l.push(a=[h])}}else l.push(a=[h=[]]);t.skipWhiteSpace();break;default:if(t.isWhiteSpace(n))h.length>0&&a.push(h=[]),t.skipWhiteSpace(),t.advance(-1);else{if(!W(n))throw U("Unexpected character '"+n+"'.",t);if(h.length>0)throw U("Type (tag name) selectors must come before all other simple selectors.",t);o.type="type",o.name=P(t).toUpperCase(),h.push(o),o={}}}n=t.getNextChar()}0===h.length&&(1===a.length?(l.pop(),a=l[l.length-1]):a.pop());if(a&&"string"==typeof a[a.length-1])throw U("Complex selectors are not allowed to end with a combinator.",t,-1);return l}(new r(e.replace(A,"\n")))}function U(e,t,s=0){var i=new SyntaxError(e),r=t.index+s;return i.stack="SyntaxError: "+e+"\n\n"+t.str+"\n"+" ".repeat(r)+"^\n    at index "+r,i}function P(e){var t="",s=e.getChar();if(W(s)){do{"\\"===s?(t+=k(e),s=e.getChar()):(t+=s,s=e.getNextChar())}while(s!==i&&(W(s)||s>="0"&&s<="9"||"-"===s));e.advance(-1)}return t}function k(e){var t=e.getNextChar();if(L(t)){let s="";for(let i=5;i>=0&&L(t);i--)s+=t,t=e.getNextChar();return e.isWhiteSpace(t)&&e.getNextChar(),0===(s=0|parseInt(s,16))||s>=55296&&s<=57343||s>1114111?"�":String.fromCodePoint(s)}return t===i?"�":(e.getNextChar(),t)}function L(e){return e!==i&&(e>="0"&&e<="9"||e>="A"&&e<="F"||e>="a"&&e<="f")}function W(e){return e>="A"&&e<="Z"||e>="a"&&e<="z"||"_"===e||e>=""||"\\"===e}const G=0,B=1,F=2,H=3,Y=4,V={">":F,"+":H,"~":Y},X={is:(e,t,s)=>z(e,t,s),not:(e,t,s)=>!z(e,t,s),has(e,t,s){var i=!1;for(let e=0;e<s.length;e++)if(s[e][0]instanceof Array&&K(s[e][0][0])){i=z(t,t,s,!0);break}return!i&&t.childNodes.length>0&&t.forEach(e=>{if(z(t,e,s))return i=!0,!1}),i},"nth-child"(e,t,s){const i=t[c],r=i.childNodes,n=new Z(s[0],s[1]);for(let e=0;e<r.length;e++)if(r[e][l]===se.ELEMENT_NODE&&(!s[2]||z(i,r[e],s[2]))){const s=n.next();if(r[e]===t)return s}return!1},"nth-last-child"(e,t,s){const i=t[c],r=i.childNodes,n=new Z(s[0],s[1]);for(let e=r.length-1;e>=0;e--)if(r[e][l]===se.ELEMENT_NODE&&(!s[2]||z(i,r[e],s[2]))){const s=n.next();if(r[e]===t)return s}return!1},"nth-of-type"(e,t,s){const i=t[c].childNodes,r=new Z(s[0],s[1]),n=t[N];for(let e=0;e<i.length;e++)if(i[e][N]===n){const s=r.next();if(i[e]===t)return s}},"nth-last-of-type"(e,t,s){const i=t[c].childNodes,r=new Z(s[0],s[1]),n=t[N];for(let e=i.length-1;e>=0;e--)if(i[e][N]===n){const s=r.next();if(i[e]===t)return s}}},j={scope:(e,t)=>t===e,enabled(e,t){switch(t[N]){case"BUTTON":case"INPUT":case"SELECT":case"TEXTAREA":case"OPTGROUP":case"OPTION":case"FIELDSET":return!t.hasAttribute("disabled")}return!1},disabled(e,t){switch(t[N]){case"BUTTON":case"INPUT":case"SELECT":case"TEXTAREA":case"OPTGROUP":case"OPTION":case"FIELDSET":return t.hasAttribute("disabled")}return!1},checked(e,t){if("INPUT"===t[N]){const e=t.getAttribute("type");if("checkbox"===e||"radio"===e)return t.hasAttribute("checked")}else if("OPTION"===t[N])return t.hasAttribute("selected");return!1},required(e,t){switch(t[N]){case"INPUT":case"SELECT":case"TEXTAREA":return t.hasAttribute("required")}return!1},optional(e,t){switch(t[N]){case"INPUT":case"SELECT":case"TEXTAREA":return!t.hasAttribute("required")}return!1},root(e,t){const s=g(e);return!!s&&s.documentElement===t},empty:(e,t)=>0===t.childNodes.length,"first-child"(e,t){const s=t[c].childNodes;for(let e=0;e<s.length;e++)if(s[e][l]===se.ELEMENT_NODE)return s[e]===t},"last-child"(e,t){const s=t[c].childNodes;for(let e=s.length-1;e>=0;e--)if(s[e][l]===se.ELEMENT_NODE)return s[e]===t},"only-child"(e,t){const s=t[c].childNodes;let i,r;for(let e=0,t=s.length-1;t>=0&&(!i||!r);e++,t--)i||s[e][l]!==se.ELEMENT_NODE||(i=s[e]),r||s[t][l]!==se.ELEMENT_NODE||(r=s[t]);return i===r&&i===t},"first-of-type"(e,t){const s=t[c].childNodes,i=t[N];for(let e=0;e<s.length;e++)if(s[e][N]===i)return s[e]===t},"last-of-type"(e,t){const s=t[c].childNodes,i=t[N];for(let e=s.length-1;e>=0;e--)if(s[e][N]===i)return s[e]===t},"only-of-type"(e,t){const s=t[c].childNodes,i=t[N];let r,n;for(let e=0,t=s.length-1;t>=0&&(!r||!n);e++,t--)r||s[e][N]!==i||(r=s[e]),n||s[t][N]!==i||(n=s[t]);return r===n&&r===t}};function q(e,t,s){const i=v(t),r=[];return e.forEach(t=>{if(z(e,t,i)&&(r.push(t),!s))return!1}),s?r:r[0]||null}function z(e,t,s,i=!1){var r;e:for(let n=0;n<s.length;n++){const o=s[n];let h=G;if(!(i&&o[0]instanceof Array)||K(o[0][0])){r=t;t:for(let t=i?0:o.length-1;i?t<o.length:t>=0;i?t++:t--)if(V.hasOwnProperty(o[t]))h=V[o[t]];else switch(h){case G:if(!$(e,r,o[t]))continue e;h=B;break;case B:for(;r=r[c];)if($(e,r,o[t]))continue t;continue e;case F:if(!$(e,r=r[c],o[t]))continue e;break;case H:{const s=r[c].childNodes;if(!$(e,r=s[s.indexOf(r)+(i?1:-1)],o[t]))continue e;break}case Y:{const s=r[c].childNodes;for(let n=s.indexOf(r)+(i?1:-1);i?n<s.length:n>=0;i?n++:n--)if($(e,s[n],o[t])){r=s[n];continue t}continue e}}return!0}}return!1}function $(e,t,s){if(!t||t[l]!==se.ELEMENT_NODE)return!1;for(let i=0;i<s.length;i++){const r=s[i];let n;switch(n=!1,r.type){case"universal":return!0;case"type":n=t[N]===r.name;break;case"id":n=t.id===r.name;break;case"class":n=t.classList.contains(r.name);break;case"attr":if("="!==r.comparison||!0!==r.value&&""!==r.value){let e=t.getAttribute(r.name);if("string"==typeof e){let t=r.ignoreCase?r.value.toLowerCase():r.value;if(r.ignoreCase&&(e=e.toLowerCase()),""!==t)switch(r.comparison){case"=":n=e===t;break;case"~=":n=-1!==e.split(p).indexOf(t);break;case"|=":n=e===t||e.startsWith(t+"-");break;case"^=":n=e.startsWith(t);break;case"$=":n=e.endsWith(t);break;case"*=":n=-1!==e.indexOf(t)}}}else n=t.hasAttribute(r.name);break;case"pseudo-element":break;case"pseudo-class":j.hasOwnProperty(r.name)&&(n=!!j[r.name].call(null,e,t));break;case"pseudo-fn":X.hasOwnProperty(r.name)&&(n=!!X[r.name].call(null,e,t,r.params))}if(!n)return!1}return!0}function K(e){return!!e&&"pseudo-class"===e.type&&"scope"===e.name}X.where=X.is;class Z{constructor(e,t){this.A=0|parseInt(e,10),this.B=0|parseInt(t,10),this.current=0}next(){if(0===this.A&&0===this.B)return!1;this.current+=1;let e=!1;return 0===this.A?e=this.current===this.B:(this.A<0&&this.B>=this.current||this.A>0&&this.current>=this.B)&&(e=(this.current+this.B)%this.A==0),e}}function J(e){var t=e.tagName,s=g(e),i=s?s.entityEncoder:null,r="";switch(e.nodeType){case E.ELEMENT_NODE:for(var n in r+="<"+(t=t.toLowerCase()),e.attributes)if(e.attributes.hasOwnProperty(n)){var o=e.attributes[n];!0===o?o="":i&&s[u]&&(o=Q(o,i,s[u])),r+=" "+n,""!==o&&(r+='="'+o+'"')}r+=">";for(var h=0;h<e.childNodes.length;h++)r+=J(e.childNodes[h]);!0!==f[e.tagName]&&(r+="</"+t+">");break;case E.TEXT_NODE:i&&s[u]&&(!e.parentNode||"SCRIPT"!==e.parentNode.tagName&&"STYLE"!==e.parentNode.tagName)?r+=Q(e.nodeValue,i,s[u]):r+=e.nodeValue;break;case E.CDATA_SECTION_NODE:r+="<![CDATA["+e.nodeValue+"]]>";break;case E.PROCESSING_INSTRUCTION_NODE:r+="<?"+e.nodeName,e.nodeValue&&(r+=" "+e.nodeValue),r+="?>";break;case E.COMMENT_NODE:r+="\x3c!--"+e.nodeValue+"--\x3e";break;case E.DOCUMENT_TYPE_NODE:r+="<!DOCTYPE",e.name&&(r+=" "+e.name),e.publicId&&(r+=' PUBLIC "'+e.publicId+'"'),e.systemId&&(e.publicId||(r+=" SYSTEM"),r+=' "'+e.systemId+'"'),r+=">"}return r}function Q(e,t,s){return!1===s.encodeEntities?e:!0!==s.encodeEntities&&s.encodeEntities instanceof RegExp?t.encode(e,s.encodeEntities):t.encode(e)}const ee=Symbol("classList");function te(e,t=se){const s=Object.create(t.prototype);switch(s[l]=e,s.nodeValue=null,s[c]=null,s[d]=null,e){case se.ELEMENT_NODE:s[N]=null,s.attributes={};case se.DOCUMENT_NODE:case se.DOCUMENT_FRAGMENT_NODE:s.childNodes=[]}return s}class se{constructor(){throw new Error("Cannot directly instantiate Node.")}get nodeType(){return this[l]}get nodeName(){switch(this.nodeType){case se.ELEMENT_NODE:return this.tagName;case se.TEXT_NODE:return"#text";case se.CDATA_SECTION_NODE:return"#cdata-section";case se.PROCESSING_INSTRUCTION_NODE:return this.target;case se.COMMENT_NODE:return"#comment";case se.DOCUMENT_NODE:return"#document";case se.DOCUMENT_TYPE_NODE:return this.name;case se.DOCUMENT_FRAGMENT_NODE:return"#document-fragment"}}get parentNode(){return this[c]}get ownerDocument(){return this[d]}get tagName(){return this[N]||null}get firstChild(){return this.childNodes&&this.childNodes[0]||null}get lastChild(){return this.childNodes&&this.childNodes[this.childNodes.length-1]||null}get previousSibling(){const e=this.parentNode;if(e){const t=e.childNodes.indexOf(this);if(t>0)return e.childNodes[t-1]}return null}get nextSibling(){const e=this.parentNode;if(e){const t=e.childNodes.indexOf(this);if(t>-1&&t<e.childNodes.length-1)return e.childNodes[t+1]}return null}get id(){return this.attributes&&this.attributes.id||""}set id(e){this.attributes&&(this.attributes.id=e)}get className(){return this.attributes&&this.attributes.class||""}set className(e){this.attributes&&(this.classList.value=e,this.attributes.class=this[ee].value)}get classList(){return this.attributes?(this[ee]||(this[ee]=function(e){const t=Object.create(M.prototype);t[D]=0,t[m]=e;const s=e.className;return s&&(t.value=s),t}(this)),this[ee]):null}get innerHTML(){if(this.nodeType===se.ELEMENT_NODE){let e="";for(let t=0;t<this.childNodes.length;t++)e+=J(this.childNodes[t]);return e}return null}set innerHTML(e){if(this.nodeType===se.ELEMENT_NODE&&!0!==f[this.tagName]){const t=ne(this,e);t?re(this,t,0,this.childNodes.length):(O(this.childNodes),this.childNodes.length=0)}}get outerHTML(){return J(this)}set outerHTML(e){if(this.parentNode){const t=this.parentNode.childNodes.indexOf(this),s=ne(this,e);s?re(this.parentNode,s,t,1):O(this.parentNode.childNodes.splice(t,1))}}get textContent(){if(this.childNodes){let e="";for(let t=0;t<this.childNodes.length;t++)this.childNodes[t].nodeType!==se.COMMENT_NODE&&this.childNodes[t].nodeType!==se.CDATA_SECTION_NODE&&this.childNodes[t].nodeType!==se.PROCESSING_INSTRUCTION_NODE&&(e+=this.childNodes[t].textContent);return e}return this.nodeValue}set textContent(e){if(null==e?e="":"string"!=typeof e&&(e+=""),this.childNodes){let t=te(se.TEXT_NODE);t.nodeValue=e,x(t,this),O(this.childNodes),this.childNodes.length=1,this.childNodes[0]=t}else this.nodeType>=se.TEXT_NODE&&this.nodeType<=se.COMMENT_NODE&&(this.nodeValue=e)}getRootNode(){let e=this;for(;e.parentNode;)e=e.parentNode;return e}hasAttributes(){if(this.attributes)for(let e in this.attributes)if(this.attributes.hasOwnProperty(e))return!0;return!1}getAttributeNames(){return this.attributes?Object.keys(this.attributes):[]}getAttribute(e){var t;return this.attributes&&e&&"string"==typeof e&&(t=this.attributes[oe(this,e)]),void 0===t?null:t}setAttribute(e,t){this.attributes&&e&&"string"==typeof e&&("class"===(e=oe(this,e))?!0!==t?this.className=""+t:(this.classList.value="",this.attributes[e]=!0):this.attributes[e]="string"==typeof t||!0===t?t:""+t)}toggleAttribute(e,t){if(this.attributes&&e&&"string"==typeof e)return e=oe(this,e),this.attributes.hasOwnProperty(e)?1!==arguments.length&&!1!==t||(delete this.attributes[e],!1):(1===arguments.length||!0===t)&&(this.attributes[e]=!0)}removeAttribute(e){this.attributes&&e&&"string"==typeof e&&("class"===(e=oe(this,e))&&this[ee]&&(this[ee].value=null),delete this.attributes[e])}hasAttribute(e){return!(!this.attributes||!e||"string"!=typeof e)&&this.attributes.hasOwnProperty(oe(this,e))}hasChildNodes(){return!!this.childNodes&&this.childNodes.length>0}appendChild(e){return this.insertBefore(e,null)}insertBefore(e,t){if(this.childNodes&&e instanceof se&&arguments.length>1){let s=-1;if(null==t?s=this.childNodes.length:t instanceof se&&t.parentNode===this&&(s=this.childNodes.indexOf(t)),-1!==s)return re(this,e,s)}return null}replaceChild(e,t){return this.childNodes&&t instanceof se&&e instanceof se&&t.parentNode===this&&t!==e?(re(this,e,this.childNodes.indexOf(t),1),t):null}removeChild(e){if(this.childNodes&&e instanceof se&&e.parentNode===this){const t=this.childNodes.indexOf(e),s=g(this);return s&&e.parentNode===s.documentElement&&ie.hasOwnProperty(e.tagName)&&(s[ie[e.tagName]]=null),O(this.childNodes.splice(t,1)),e}return null}cloneNode(e){var t;switch(t=this.nodeType===se.DOCUMENT_NODE||this.nodeType===se.DOCUMENT_FRAGMENT_NODE?new Me(null,this[u]):te(this.nodeType),this.nodeType){case se.ELEMENT_NODE:t[N]=this.tagName,t.attributes=Object.assign(t.attributes,this.attributes);break;case se.TEXT_NODE:case se.CDATA_SECTION_NODE:case se.PROCESSING_INSTRUCTION_NODE:case se.COMMENT_NODE:t.nodeValue=this.nodeValue;break;case se.DOCUMENT_NODE:case se.DOCUMENT_FRAGMENT_NODE:t[l]=this.nodeType,t.entityEncoder.entities=this.entityEncoder;break;case se.DOCUMENT_TYPE_NODE:t.name=this.name,t.publicId=this.publicId,t.systemId=this.systemId}if(!0===e&&this.childNodes&&this.childNodes.length>0){for(let e=0;e<this.childNodes.length;e++)t.appendChild(this.childNodes[e].cloneNode(!0));t.nodeType!==se.DOCUMENT_NODE&&t.nodeType!==se.DOCUMENT_FRAGMENT_NODE||T(t)}return t}getElementById(e){var t=null;return this.childNodes&&this.forEach(s=>{if(s.id===e)return t=s,!1}),t}getElementsByClassName(e){var t=[];if(e&&"string"==typeof e){const s=e.trim().split(p);(s.length>1||""!==s[0])&&this.forEach(e=>{for(let t=0;t<s.length;t++)if(!e.classList.contains(s[t]))return;t.push(e)})}return t}getElementsByTagName(e){var t=[];return e&&"string"==typeof e&&(e=e.toUpperCase(),this.forEach(s=>{"*"!==e&&s.tagName!==e||t.push(s)})),t}closest(e){return function(e,t){const s=v(t);let i=e;for(;null!=i&&i[l]===se.ELEMENT_NODE;){if(z(e,i,s))return i;i=i[c]}return null}(this,e)}matches(e){return function(e,t){return z(e,e,v(t))}(this,e)}querySelector(e){return q(this,e,!1)}querySelectorAll(e){return q(this,e,!0)}forEach(e,t=E.ELEMENT_NODE){let s,i,r=this.childNodes,n=this.firstChild,o=[],h=0;for(;n;){if(s=n[c],i=r[h+1],(null===t||n.nodeType===t)&&!1===e(n,s))return;if(n[c]===s&&n.childNodes&&n.childNodes.length>0)o.push(h),n=(r=n.childNodes)[h=0];else{for(i?i!==r[h+=1]&&(h=s.childNodes.indexOf(i)):h=r.length;null==r[h];){if(s=(n=s)[c],!n||n===this)return;r=s.childNodes,h=o.pop()+1}n=r[h]}}}}Object.defineProperties(se,{ELEMENT_NODE:{value:E.ELEMENT_NODE},TEXT_NODE:{value:E.TEXT_NODE},CDATA_SECTION_NODE:{value:E.CDATA_SECTION_NODE},PROCESSING_INSTRUCTION_NODE:{value:E.PROCESSING_INSTRUCTION_NODE},COMMENT_NODE:{value:E.COMMENT_NODE},DOCUMENT_NODE:{value:E.DOCUMENT_NODE},DOCUMENT_TYPE_NODE:{value:E.DOCUMENT_TYPE_NODE},DOCUMENT_FRAGMENT_NODE:{value:E.DOCUMENT_FRAGMENT_NODE}});const ie={HEAD:o,BODY:h,FRAMESET:h};function re(e,t,s,i=0){if(!e||e.nodeType!==se.ELEMENT_NODE&&e.nodeType!==se.DOCUMENT_NODE&&e.nodeType!==se.DOCUMENT_FRAGMENT_NODE||e.nodeType===se.ELEMENT_NODE&&!0===f[e.tagName])return t;if(t.nodeType<=se.COMMENT_NODE){if(e.parentNode&&e.parentNode.nodeType===se.DOCUMENT_NODE&&ie.hasOwnProperty(t.tagName)){const s=ie[t.tagName];if(e.parentNode[s]&&0===i)return t;e.parentNode[s]=t}t.parentNode&&t.parentNode.removeChild(t),x(t,e),O(e.childNodes.splice(s,i,t))}else if(t.nodeType!==se.DOCUMENT_TYPE_NODE||e.nodeType!==se.DOCUMENT_NODE&&e.nodeType!==se.DOCUMENT_FRAGMENT_NODE){if(t.nodeType===se.DOCUMENT_FRAGMENT_NODE)if(e.parentNode&&e.parentNode.nodeType===se.DOCUMENT_NODE){i>0&&O(e.childNodes.splice(s,i));for(let r=t.childNodes.length-1;r>=0;r--){const n=t.childNodes[r];if(ie.hasOwnProperty(n.tagName)){const t=ie[n.tagName];if(e.parentNode[t]&&0===i)continue;e.parentNode[t]=n}x(n,e),e.childNodes.splice(s,0,n),t.childNodes.splice(r,1)}}else if(t!==g(e)){for(let s=0;s<t.childNodes.length;s++)x(t.childNodes[s],e);O(e.childNodes.splice(s,i,...t.childNodes)),t.childNodes.length=0}}else{const r=t.parentNode;!r||r.nodeType!==se.DOCUMENT_NODE&&r.nodeType!==se.DOCUMENT_FRAGMENT_NODE||(r.removeChild(t),r[n]=null),x(t,e),O(e.childNodes.splice(s,i,t)),e[n]=t}return t}function ne(e,t){if(t&&"string"==typeof t){const s=g(e);return new xe(t,s?s[u]:null,s?s.entityEncoder:null).parseHTML()}}function oe(e,t){const s=g(e);return s&&s[u].lowerAttributeCase?t.toLowerCase():t}const he=String.prototype.toLowerCase,ae=String.prototype.toUpperCase,le={allowCustomRootElement:!1,allowSelfClosingSyntax:!1,allowCDATA:!1,allowProcessingInstructions:!1,decodeEntities:!1,encodeEntities:!1,collapseWhitespace:!1,trimWhitespace:!1,lowerAttributeCase:!1},ce=0,de=1,Ne=2,ue={">":!0,"/":!0,"=":!0},pe={P:!0},Ee={DT:!0,DD:!0},fe={TBODY:!0,THEAD:!0,TFOOT:!0},Te={TD:!0,TH:!0},ge={BUTTON:!0,DATALIST:!0,OPTGROUP:!0,OPTION:!0,PROGRESS:!0,SELECT:!0,TEXTAREA:!0},Oe={ADDRESS:pe,ARTICLE:pe,ASIDE:pe,BLOCKQUOTE:pe,DIV:pe,FIELDSET:pe,FOOTER:pe,H1:pe,H2:pe,H3:pe,H4:pe,H5:pe,H6:pe,HEADER:pe,HGROUP:pe,HR:pe,MAIN:pe,NAV:pe,P:pe,PRE:pe,SECTION:pe,BODY:{HEAD:!0,TITLE:!0},DL:pe,DD:Ee,DT:Ee,TABLE:pe,TBODY:fe,THEAD:fe,TD:Te,TFOOT:fe,TH:Te,TR:{TR:!0},LI:{LI:!0},OL:pe,UL:pe,BUTTON:ge,DATALIST:ge,FORM:pe,INPUT:ge,OPTGROUP:{OPTGROUP:!0,OPTION:!0},OPTION:{OPTION:!0},OUTPUT:ge,PROGRESS:ge,SELECT:ge,TEXTAREA:ge};class xe{constructor(e,t,s){this.options=xe.setupOptions(t),this.lexer=new r(e),this.entityEncoder=s}static setupOptions(e){return(e=Object.assign({},le,e)).encodeEntities instanceof RegExp&&(e.encodeEntities=C(e.encodeEntities)),Object.freeze(e)}static isNameCharStart(e){return":"===e||"_"===e||e>="A"&&e<="Z"||e>="a"&&e<="z"||e>="À"&&e<="Ö"||e>="Ø"&&e<="ö"||e>="ø"&&e<="˿"||e>="Ͱ"&&e<="ͽ"||e>="Ϳ"&&e<="῿"||"‌"===e||"‍"===e||e>="⁰"&&e<="↏"||e>="Ⰰ"&&e<="⿯"||e>="、"&&e<="퟿"||e>="豈"&&e<="﷏"||e>="ﷰ"&&e<="�"||e>="က0"&&e<="F"}static isNameChar(e){return xe.isNameCharStart(e)||e>="0"&&e<="9"||"-"===e||"."===e||"·"===e||e>="̀"&&e<="ͯ"||"‿"===e||"⁀"===e}parseHTML(){var e,t=te(se.DOCUMENT_FRAGMENT_NODE),s=[t];for(t[u]=this.options,e=this.options.trimWhitespace?this.lexer.skipWhiteSpace():this.lexer.getChar();e!==i&&s.length>0;)"<"===e?this.parseTag(s):this.parseText(s),e=this.options.trimWhitespace?this.lexer.skipWhiteSpace():this.lexer.getChar();return t}parseTag(e){var t,s,r,n,o=ce,h=this.lexer.index,a=this.lexer.getNextChar();if(a!==i)e:for(;">"!==a&&a!==i;){if(r=this.lexer.index,o===ce){if("!"===a||"?"===a){if(this.options.allowProcessingInstructions&&this.lexer.match("?")){r=this.lexer.index,a=this.lexer.getChar();t:if(xe.isNameCharStart(a)){for(t=te(se.PROCESSING_INSTRUCTION_NODE);a!==i&&xe.isNameChar(a);)a=this.lexer.getNextChar();if(!this.lexer.isWhiteSpace(a)&&a!==i&&("?"!==a||">"!==this.lexer.peek()))break t;t.target=this.lexer.str.slice(r,this.lexer.index),this.lexer.skipWhiteSpace(),r=this.lexer.index,this.lexer.goToString("?>"),t.nodeValue=this.lexer.str.slice(r,this.lexer.index),this.lexer.advance(1),e[0].childNodes.push(t),x(t,e[0]);break}this.lexer.advance(r-this.lexer.index-1)}if(this.options.allowCDATA&&this.lexer.match("![CDATA[")){t=te(se.CDATA_SECTION_NODE),r=this.lexer.index,this.lexer.goToString("]]>"),t.nodeValue=this.lexer.str.slice(r,this.lexer.index),this.lexer.advance(2),e[0].childNodes.push(t),x(t,e[0]);break}if(this.lexer.match("!DOCTYPE",!1)){this.lexer.skipWhiteSpace(),r=this.lexer.index,this.lexer.goToString(">");var c=e[e.length-1];if(c.doctype)break;if(c.childNodes.length>0)for(let e=c.childNodes.length-1;e>=0;e--)if(c.childNodes[e].nodeType<se.TEXT_NODE||c.childNodes[e].nodeType>se.COMMENT_NODE)break e;var d=this.lexer.str.slice(r,this.lexer.index).split(p);if((t=te(se.DOCUMENT_TYPE_NODE)).name=he.call(d.shift()),d.length>1){var u=he.call(d.shift());if(""===(d=d.join(" ").split('"'))[0])switch(u){case"public":d.shift(),t.publicId=d.shift();case"system":d.shift(),t.systemId=d.shift()}}t.publicId||(t.publicId=""),t.systemId||(t.systemId=""),c.childNodes.push(t),c.doctype=t,x(t,c);break}{let s;this.lexer.match("!--")?this.lexer.match(">")||this.lexer.match("->")||(s="--\x3e"):("!"===a&&this.lexer.getNextChar(),s=">"),t=te(se.COMMENT_NODE),r=this.lexer.index,s&&this.lexer.goToString(s),t.nodeValue=this.lexer.str.slice(r,this.lexer.index),this.lexer.advance(s?s.length-1:-1),e[0].childNodes.push(t),x(t,e[0]);break}}"/"===a&&(a=this.lexer.getNextChar(),o=Ne,r+=1)}if(o===de){for(;this.lexer.index===r&&"="===a||!this.lexer.isWhiteSpace(a)&&!ue[a]&&a!==i;)a=this.lexer.getNextChar();n=this.lexer.index}else{for(;(a>="a"&&a<="z"||a>="A"&&a<="Z"||this.lexer.index>r&&(a>="0"&&a<="9"||"-"===a||"_"===a||":"===a))&&a!==i;)a=this.lexer.getNextChar();if(n=this.lexer.index,a===i)return void this.addTextNode(e,h,n,!1);a=this.lexer.skipWhiteSpace(),o===Ne&&(a=this.lexer.goToString(">"))}if(r===n){if(!this.options.allowSelfClosingSyntax||"/"!==a||">"!==this.lexer.peek()){if(o===ce){this.lexer.goToString("<"),this.addTextNode(e,h,this.lexer.index,!1),h=this.lexer.index,a=this.lexer.getNextChar();continue}if(o===Ne){if(r===this.lexer.index)break;(t=this.addTextNode(e,r,this.lexer.index))[l]=se.COMMENT_NODE;break}this.lexer.getNextChar(),a=this.lexer.skipWhiteSpace();continue}a=this.lexer.getNextChar(),o=Ne,s=e[0][N]}else s=this.lexer.str.slice(r,n),o!==de&&(s=ae.call(s)),a=this.lexer.skipWhiteSpace();switch(o){case ce:for((t=te(se.ELEMENT_NODE))[N]=s;Oe.hasOwnProperty(t[N])&&Oe[t[N]][e[0][N]];)e.splice(0,1);e[0].childNodes.push(t),x(t,e[0]),o=de,!0!==f[t[N]]&&e.unshift(t);break;case de:var E=!0;if(this.options.lowerAttributeCase&&(s=he.call(s)),"="===a){if(this.lexer.getNextChar(),a=this.lexer.skipWhiteSpace(),r=this.lexer.index,'"'===a||"'"===a)this.lexer.getNextChar(),this.lexer.goToString(a),n=this.lexer.index,r+=1,this.lexer.getNextChar(),a=this.lexer.skipWhiteSpace();else{for(;!(this.lexer.isWhiteSpace(a)||">"===a||this.options.allowSelfClosingSyntax&&"/"===a&&">"===this.lexer.peek()||a===i);)a=this.lexer.getNextChar();n=this.lexer.index,a=this.lexer.skipWhiteSpace()}if(t.attributes.hasOwnProperty(s))break;""===(E=this.lexer.str.slice(r,n))?E=!0:this.options.decodeEntities&&(E=this.entityEncoder.decode(E))}else if(t.attributes.hasOwnProperty(s))break;t.attributes[s]=E;break;case Ne:for(var T=0;T<e.length;T++)if(e[T][N]===s){for(t=e[T];e.length>0&&e[0]!==t;)e.shift();e.shift();break}}}else this.addTextNode(e,h,this.lexer.index,!1);this.lexer.getNextChar()}parseText(e){var t=this.lexer.index,s=!1;"SCRIPT"===e[0][N]||"STYLE"===e[0][N]?(this.lexer.goToString("</"+e[0][N],!1),s=!0):this.lexer.goToString("<"),this.addTextNode(e,t,this.lexer.index,s)}addTextNode(e,t,s,i){var r=te(se.TEXT_NODE),n=this.lexer.str.slice(t,s);return null!=i&&(this.options.trimWhitespace?n=n.trim():this.options.collapseWhitespace&&!i&&(n=n.replace(p," ")),this.options.decodeEntities&&!i&&(n=this.entityEncoder.decode(n))),r.nodeValue=n,e[0].childNodes.push(r),x(r,e[0]),r}}const Ce=/&(#\d+|#[xX][0-9a-fA-F]+|[0-9a-zA-Z]+);?/g,me=/[\^$\\.*+?()[\]{}|]/g,De=_e({amp:"&",apos:"'",copy:169,gt:">",lt:"<",nbsp:160,quot:'"'});let ye=De;class be{constructor(e){this.entities=e||"default"}encode(e,t){return this.encodingReplacements?e.replace(t instanceof RegExp?C(t):this.encodingRE,e=>this.encodingReplacements[e]||e):e}decode(e){return this.decodingReplacements?e.replace(Ce,(e,t)=>"#"===t[0]?(t="x"===t[1]||"X"===t[1]?0|parseInt(t.slice(2),16):0|t.slice(1),String.fromCodePoint(t)):this.decodingReplacements[t]||this.decodingReplacements[t.toLowerCase()]||e):e}set entities(e){"default"===e?e=ye:e&&e.encodingRE instanceof RegExp||(e=_e(e)),this.encodingRE=e.encodingRE,this.encodingReplacements=e.encodingReplacements,this.decodingReplacements=e.decodingReplacements}static set defaultEntities(e){ye=e&&"object"==typeof e?_e(Object.assign({},e)):De}}function _e(e){var t={encodingRE:null,encodingReplacements:null,decodingReplacements:null};if(e&&"object"==typeof e){const s={},i={},r=[];for(let t in e)if(e.hasOwnProperty(t)){let n=e[t];if("number"==typeof n&&isFinite(n))n=String.fromCodePoint(n);else if("string"!=typeof n||""===n)continue;r.push(n.replace(me,"\\$&")),(!s.hasOwnProperty(n)||t.length+2<s[n].length)&&(s[n]="&"+t+";"),i[t]=n}r.length>0&&(t.encodingRE=new RegExp(r.join("|"),"g"),t.encodingReplacements=s,t.decodingReplacements=i)}return t.encodingRE||(t.encodingRE=new RegExp("(?:)","g")),t}const Se=Symbol("entityEncoder");class Me extends se{constructor(e,t){const s=te(se.DOCUMENT_FRAGMENT_NODE,Me);return s[u]=xe.setupOptions(t),s[Se]=new be(s[u].entities),s.innerHTML=e,s}get documentElement(){return this[a]||null}get innerHTML(){let e="";for(let t=0;t<this.childNodes.length;t++)e+=J(this.childNodes[t]);return e}set innerHTML(e){if(this[l]=se.DOCUMENT_FRAGMENT_NODE,e&&"string"==typeof e){const t=new xe(e,this[u],this[Se]).parseHTML();O(this.childNodes),t.doctype?this[n]=t.doctype:this[n]=null,this.childNodes=t.childNodes;for(let e=0;e<this.childNodes.length;e++)x(this.childNodes[e],this);T(this)}else this.childNodes.length=0}get outerHTML(){return null}set outerHTML(e){}get doctype(){return this[n]||null}set doctype(e){if(e){let t=this[n];e instanceof se?e.nodeType===se.DOCUMENT_TYPE_NODE&&e!==t&&(this[n]=e,t?this.replaceChild(e,t):this.insertBefore(e,this.firstChild)):"object"==typeof e&&(t?Ie(t,e.name,e.publicId,e.systemId):this[n]=this.insertBefore(this.createDocumentType(e.name,e.publicId,e.systemId),this.firstChild))}else null===e&&this[n]&&(this.removeChild(this[n]),this[n]=null)}get head(){return this[o]||null}get title(){const e=this.head;if(e){const t=e.getElementsByTagName("title");if(t.length>0)return t[0].textContent}return""}set title(e){const t=this.head;if(t){let s=t.getElementsByTagName("title");(s=s.length<=0?t.appendChild(this.createElement("title")):s[0]).textContent=e}}get body(){return this[h]||null}set body(e){e instanceof se&&e.nodeType===se.ELEMENT_NODE&&("BODY"===e.tagName||"FRAMESET"===e.tagName)&&e!==this[h]&&this[a]&&(this[h]?this[h].parentNode.replaceChild(e,this[h]):this[a].appendChild(e))}get entityEncoder(){return this[Se]}createElement(e){if(e&&"string"==typeof e){const t=te(se.ELEMENT_NODE);return t[N]=e.toUpperCase(),t}}createTextNode(e){return Ae(se.TEXT_NODE,e)}createComment(e){return Ae(se.COMMENT_NODE,e)}createCDATASection(e){return Ae(se.CDATA_SECTION_NODE,e,"]]>")}createProcessingInstruction(e,t){e:if(e&&"string"==typeof e){if(!xe.isNameCharStart(e[0]))break e;for(let t=1;t<e.length;t++)if(!xe.isNameChar(e[t]))break e;const s=Ae(se.PROCESSING_INSTRUCTION_NODE,t,"?>");return s.target=e,s}throw new Error("Invalid target name "+JSON.stringify(e)+".")}createDocumentType(e,t,s){return Ie(te(se.DOCUMENT_TYPE_NODE),e,t,s)}getElementsByName(e){const t=[];return e&&"string"==typeof e&&this.forEach(s=>{s.attributes&&s.attributes.name===e&&t.push(s)}),t}}function Ae(e,t,s=!1){const i=te(e);if(i.nodeValue="",t&&"string"==typeof t){if(s&&"string"==typeof s&&-1!==t.indexOf(s))throw new Error("The data provided ('"+t+"') contains '"+s+"'.");i.nodeValue+=t}return i}function Ie(e,t,s,i){return t&&"string"==typeof t?(e.name=t.toLowerCase(),e.publicId=s&&"string"==typeof s?s:"",e.systemId=i&&"string"==typeof i?i:""):e.name=e.publicId=e.systemId="",e}Me.Node=se,Me.EntityEncoder=be;export default Me;