// string, szöveg
let str = 'cica';
// number, szám
let num = 1;
// boolean true-false
let boolean = true;
// array, tömb
let arr = [1, 2, 3, 1, 1];

// mátrix
let matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// 2. feladat referencia - érték szerinti paraméterátadás
let a = 1;
const fgv = (a) => {
  if (a === 1) {
    a = 5;
    return a;
  } else {
    a = 3;
    return a;
  }
};

console.log('Referencia: ' + fgv(a)); // az a változót, mint referencia került átadásra a függvénynek, ezért 5-t kaptunk eredményül
console.log('Érték: ' + fgv(2)); // magát a 2 értéket adtuk át, ezért az eredmény 3

// 3. feladat összeadás tétele
const sum = (a, b) => {
  return a + b;
};

console.log('Összeadás tétel: ' + sum(3, 4));

// 4. feladat megszámlálás tétele
const countElements = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }
  console.log('A/Az ' + n + ' értékű elem előfordulása a tömbben ' + count);
};

countElements(arr, 1);

// 5. feladat switch fgv
const switchFgv = (a) => {
  switch (a) {
    case 1:
      console.log('A megvizsgált érték: 1.');
      break;
    case 2:
      console.log('A megvizsgált érték: 2.');
      break;
    default:
      console.log('A megvizsgált érték nem 1 és nem 2.');
      break;
  }
};
switchFgv(5);

// 6. feladat metszet tétele
