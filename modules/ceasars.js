function rot13(str) {
  let all = '';
  for (let i=97; i<123;i++) {
    all+=String.fromCharCode(i);
  }
  let all1=all //.toUpperCase();
  let result='';
  let regex=/[a-z]/;
  for (let n=0;n<str.length;n++) {
    if (str[n].match(regex)) {
      for (let i=0;i<all1.length;i++) {
        if (str[n] === all1[i]) {
          
          if (i<13) {
            i+=26;
          }
          let x=i-13;
          result += all1[x];
        }
      }
    } else {
      result+=str[n];
    }
  }
  return result;
}

export { rot13 };
