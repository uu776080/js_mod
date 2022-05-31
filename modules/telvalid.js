function telChck(str) {
  let regex=/^([1]{1})?\s?(\(\d{3}\)|\d{3}[-]?)\s?\d{3}[-]?\s?\d{4}$/;
  let result='';
  if (regex.test(str)) {
    result = 'valid';
  } else {
    result = 'not valid';
  }
 
  return result;
}

export { telChck };
