import './style.css'
import auto from '@autolib/auto';
import Button from './Button.html';

let button = (props, content) => auto({
  name: 'button'+Math.random()
});

const parser = new DOMParser();

window._ = auto({
  text: (_) => /*html*/`<h1>Hello Vite!</h1>
    <p>${_.clicks} clicks</p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
    <button onclick={_.clicks+=1}>Click me</button>
    ${Button}
  `,
  main: (_) => {
    document.querySelector('#app').innerHTML = _.text;  
  },
  parsed: (_) => parser.parseFromString(_.text,'text/html'),
  nodes: (_) => _.parsed.body.children,
  clicks: 0
},
{
  watch: {
    nodes: true
  }
})

console.log('_',_);