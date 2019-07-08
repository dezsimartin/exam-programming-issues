// 8. feladat
let readline = require('readline-sync');
console.log('Kérlek adj meg két számot.');
let a = readline.keyIn();
let b = readline.keyIn();

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = (arr) => {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = num;
      num = num * 2;
    }
  }
};

let arr = [];
arr = generate2d(Number(a), Number(b));
fill2d(arr);
console.log(arr);
