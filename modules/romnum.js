function convRom(num) {
 let ans='';
 let myNum=num.toString();
 let x1=''; let x2='';let x3='';let x4='';

 switch (myNum[myNum.length-1]) {
   case '1':
     x1='I';
     break;
   case '2':
     x1='II';
     break;
   case '3':
     x1='III';
     break;
   case '4':
     x1='IV';
     break;
   case '5':
     x1='V';
     break;
   case '6':
     x1='VI';
     break;
   case '7':
     x1='VII';
     break;
   case '8':
     x1='VIII';
     break;
   case '9':
     x1='IX';
     break;
 }
 switch (myNum[myNum.length-2]) {
   case '1':
     x2='X';
     break;
   case '2':
     x2='XX';
     break;
   case '3':
     x2='XXX';
     break;
   case '4':
     x2='XL';
     break;
   case '5':
     x2='L';
     break;
   case '6':
     x2='LX';
     break;
   case '7':
     x2='LXX';
     break;
   case '8':
     x2='LXXX';
     break;
   case '9':
     x2='XC';
     break;
 }
  switch (myNum[myNum.length-3]) {
   case '1':
     x3='C';
     break;
   case '2':
     x3='CC';
     break;
   case '3':
     x3='CCC';
     break;
   case '4':
     x3='CD';
     break;
   case '5':
     x3='D';
     break;
   case '6':
     x3='DC';
     break;
   case '7':
     x3='DCC';
     break;
   case '8':
     x3='DCCC';
     break;
   case '9':
     x3='CM';
     break;
 }
   switch (myNum[myNum.length-4]) {
   case '1':
     x4='M';
     break;
   case '2':
     x4='MM';
     break;
   case '3':
     x4='MMM';
     break;
 }
 return x4+x3+x2+x1;
}

export { convRom };
