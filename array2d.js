// 8. feladat

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
arr = generate2d(5, 5);
fill2d(arr);
console.log(arr);
