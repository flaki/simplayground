/* eslint-env browser */
/* global CM */

import DOM from './vendor/fauxdom.js';

import SIMP from './simp.js';


setTimeout(function () {
  var ref = CM["@codemirror/next/basic-setup"];
  var EditorState = ref.EditorState;
  var EditorView = ref.EditorView;
  var basicSetup = ref.basicSetup;
  var ref$1 = CM["@codemirror/next/lang-javascript"];
  var javascript = ref$1.javascript;
  var javascriptSyntax = ref$1.javascriptSyntax;
  var ref$2 = CM["@codemirror/next/autocomplete"];
  var completeFromList = ref$2.completeFromList;

  var jsCompletion = completeFromList("break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield".split(" ").concat(Object.getOwnPropertyNames(window)));

  let oldDoc=window.localStorage.getItem('lastscript')
    ||`/* Provided data: */
/* function (html, dom, simp) { */

    return { title: dom.title };

/* } */`;

  var state = EditorState.create({doc: oldDoc, extensions: [
    basicSetup,
    javascript(),
    javascriptSyntax.languageData.of({autocomplete: jsCompletion})
  ]});
  const parent = document.querySelector("#editor");

  var view = window.view = new EditorView({state: state, parent});


  document.querySelector('textarea[name=htmlsrc]').addEventListener('input', getHTML);
  getHTML();

  setInterval(rerunAction, 400);
}, 100);

let chtml = '';
function getHTML() {
  const v = document.querySelector('textarea[name=htmlsrc]');
  if (!v) return '';
  if (v.value === chtml) return chtml; //unchanged

  chtml = v.value;

  if (chtml) {
    window.localStorage.setItem('htmlsrc', chtml);
  } else {
    chtml = window.localStorage.getItem('htmlsrc');
  }

  // Preview of the html source
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
  let iframe = document.querySelector('iframe')
  let previewdoc = document.implementation.createHTMLDocument("Preview");
  previewdoc.write(chtml);

  iframe.contentDocument.replaceChild(
    iframe.contentDocument.importNode(previewdoc.documentElement, true),
    iframe.contentDocument.documentElement
  );

  // Simplified version
  document.querySelector('#simpbox').innerHTML = SIMP.parse(chtml).render();

  // Rerun action
  rerunAction()

  return chtml;
}

let ftext;
function rerunAction() {
  let f
  let color = '';
  let result
  try {
    if (!chtml) return; //console.log('no html to process');
    let ntext = window.view.state.doc;
    if (ntext===ftext) return; //console.log('no changes');

    ftext=ntext;
    window.localStorage.setItem('lastscript', ftext);

    const f = new Function('html', 'dom', 'simp', ftext);
    result = f(chtml, new DOM(chtml), SIMP.parse(chtml));
  }
  catch(e) {
    color='#fdd';
    window.lasterror=e;
    result = e.message+'\n'+e.stack;
  }

  document.querySelector('textarea[name=results]').value = JSON.stringify(result,null,2);

  const codemirror = document.querySelector('.cm-wrap');
  if (codemirror) codemirror.style.backgroundColor=color;
}
