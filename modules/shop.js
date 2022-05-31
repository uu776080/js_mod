function shopList(inpShop) {
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

export { shopList };
