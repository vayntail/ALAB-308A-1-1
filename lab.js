//  Part 1: Stack Overflow
let count = 0;
function increment() {
  count += 1;
  return increment();
}
try {
  increment();
} catch (e) {
  console.log(e);
  console.log(count);
}
// when using recursive functions, always use the call inside try catch!

//  Part 2: Trampolins
const flattenArr = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      console.log(flat);
      flat = flat.concat(flattenArr(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
};

const arr = ["hi", ["yes", "has", ["um", "3"]], "no"];
console.log(flattenArr(arr));
