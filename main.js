//import from modules
import { rot13 } from './modules/ceasars.js';
import { palindrome } from './modules/palchck.js';
import { convRom } from './modules/romnum.js';
import { telChck } from './modules/telvalid.js';

//ceasars cipher
//
//set variables
var inp = document.getElementById('item1');
var btn = document.getElementById('btnCeas');
var para1 = document.getElementById('paraCeas');
para1.textContent = '';

btn.onclick = function() {
  //check input
  if (inp.value.match(/[^a-z\s]\S/)) {
    para1.textContent = 'Please enter words in lowercase';
  } else {
  //get inserted value
  let val = inp.value;
  //set emtpty value
  inp.value = '';
  //get result
  let cipher = rot13(val);
  //output result value
  para1.textContent = cipher;
  //focus to input
  inp.focus();
  }
}

//shopping list

var listShop = document.getElementById('listShop');
var inpShop = document.getElementById('item2');
var btnShop = document.getElementById('btnShop');

btnShop.onclick = function () {
  //get and set value for input
  let value = inpShop.value;
  inpShop.value = '';

  //create elements
  let li = document.createElement('li');
  let span = document.createElement('span');
  let btn1 = document.createElement('button');
  //add elements
  li.appendChild(span);
  li.appendChild(btn1);
  //add values
  span.textContent = value;
  btn1.textContent = 'Delete';
  //add to ul
  listShop.appendChild(li);

  //delete element on click
  btn1.onclick = function(){
    listShop.removeChild(li);
  }

  //focus to input
  inpShop.focus();
}

//palindrome checker
var inpPal = document.getElementById('item3');
var btnPal = document.getElementById('btnPal');
var paraPal = document.getElementById('paraPal');

btnPal.onclick = function() {
  //check input
  if (inpPal.value.match(/\W+\D+/)) {
    paraPal.textContent = 'Please enter a word or number';
  } else {
  //get inserted value
  let val = inpPal.value;
  //set emtpty value
  inpPal.value = '';
  //get result
  let cipher = palindrome(val);
  //output result value
  paraPal.textContent = cipher;
  //focus to input
  inpPal.focus();
  }
}

// roman number converter
var inpRom = document.getElementById('item4');
var btnRom = document.getElementById('btnRom');
var paraRom = document.getElementById('paraRom');

btnRom.onclick = function() {
  //check input
  if (inpRom.value.match(/\D/)||inpRom.value>3999) {
    paraRom.textContent = 'Please enter a number between 1 and 3999';
  } else {
  //get inserted value
  let val = inpRom.value;
  //set emtpty value
  inpRom.value = '';
  //get result
  let cipher = convRom(val);
  //output result value
  paraRom.textContent = cipher;
  //focus to input
  inpRom.focus();
  }
}

// tel number validation
var inpTel = document.getElementById('item5');
var btnTel = document.getElementById('btnTel');
var paraTel = document.getElementById('paraTel');

btnTel.onclick = function() {
  //get inserted value
  let val = inpTel.value;
  //set emtpty value
  inpTel.value = '';
  //get result
  let cipher = telChck(val);
  //output result value
  paraTel.textContent = cipher;
  //focus to input
  inpTel.focus();
}

