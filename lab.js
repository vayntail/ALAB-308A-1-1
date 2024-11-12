// Part 1: Stack Overflow
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

// Part 2: Trampolins
const flattenArr = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flat = flat.concat(flattenArr(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
};
const arr = ["hi", ["yes", "has", ["um", "3"]], "no"];
console.log(flattenArr(arr));

// Part 3: Deferred Execution
const h1El = document.querySelector("h1");
const primeNumbers = (n) => {
  let count = 1;

  const displayPrimes = () => {
    if (count > n) {
      alert("complete!");
      return; // return when count hits n
    } else {
      setTimeout(() => {
        if (count % 2 == 1) {
          if (h1El.textContent == "") {
            h1El.textContent += count; // if first time, don't add comma in first
          } else {
            h1El.textContent += ", " + count;
          }
        }
        count++; // increment count
        displayPrimes(); // call recursion
      }, 1000);
    }
  };

  displayPrimes(); // first call the function
};
primeNumbers(3);
