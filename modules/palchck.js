function palindrome(str) {
  const myRegex = /[a-z0-9]/;
  var reverse = '';
  var str1 = str.toLowerCase();
  var str2 = '';
  for (let n=0; n<=str1.length-1;n++) {
    if (str1[n].match(myRegex)) {
      str2 += str1[n];
    }
  };
  for (let i=str2.length-1; i>=0;i--) {
    reverse+=str2[i];
  };
  return str2 === reverse;
}

//palindrome("eye");
export {palindrome};
