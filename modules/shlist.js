var list = document.querySelector('ol');
var input = document.querySelector('input');
var button = document.querySelector('button');

button.onclick = function() {

  //get and set value for input
  let value = input.value;
  input.value = '';

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
  list.appendChild(li);

  //delete element on click
  btn1.onclick = function(){
    list.removeChild(li);
  }

  //focus to input
  input.focus();
}
