// ==UserScript==
// @name         Wikipedia Speaks
// @description  Links IPA glyphs to audio of their pronounciation
// @match        *://*.wikipedia.org/*
// @author       github.com/drylynch
// @version      1.0.0
// @run-at       document-end
// @grant        none
// ==/UserScript==

const BASE_URL = "https://itinerarium.github.io/phoneme-synthesis/?w="

let ipas = document.getElementsByClassName('IPA');

for (let i = 0; i < ipas.length; i++) {
    node = ipas[i].childNodes[0];
    ipa_text = node.innerText;
    node.href = BASE_URL + ipa_text;
    node.target = '_blank';
    console.log(ipa_text);
}