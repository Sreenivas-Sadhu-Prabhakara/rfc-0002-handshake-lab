import {handshake} from './core.mjs';
import './share.mjs';
const $=id=>document.getElementById(id);let current=0,steps=[];
function render(){
  $('trace').replaceChildren(...steps.slice(0,current+1).map(step=>{const li=document.createElement('li'),strong=document.createElement('strong');strong.textContent=step.state;li.append(strong,document.createTextNode(step.message));return li;}));
  $('step').textContent=steps.length?`${current+1} / ${steps.length}`:'—';
  $('status').textContent=steps[current]?.state.replaceAll('_',' ')??'Choose valid inputs.';
  $('next').disabled=!steps.length||current===steps.length-1;
}
function reset(){
  current=0;
  try{if(['host-a','host-b','timeout'].some(id=>!$(id).value.trim()))throw new Error('Complete the host IDs and timeout.');steps=handshake(Number($('host-a').value),Number($('host-b').value),$('scenario').value,Number($('timeout').value));$('error').textContent='';}
  catch(e){steps=[];$('error').textContent=e.message;}
  render();
}
for(const id of ['host-a','host-b','scenario','timeout'])$(id).addEventListener('input',reset);
$('next').addEventListener('click',()=>{if(current<steps.length-1)current++;render();});$('reset').addEventListener('click',reset);reset();
