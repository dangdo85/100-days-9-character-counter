const count = document.querySelector(".count");
const letterCount = document.querySelector(".letter-count");
const numberCount = document.querySelector(".number-count");
const spacingCount = document.querySelector(".spacing-count");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
  // letterCount.innerHTML = input.value.match(/[a-zA-Z]/g).length;
  // numberCount.innerHTML = input.value.match(/\d/g).length;
  // spacingCount.innerHTML = input.value.match(/\s/g).length;
});

// if placed under one function, count does not start until first match is activated
// if statements to reset innerHTML to 0 when all of specific elements are deleted
input.addEventListener("keyup", () => {
  if (input.value.match(/[a-zA-Z]/g) == null) {
    letterCount.innerHTML = 0
  } else {
    letterCount.innerHTML = input.value.match(/[a-zA-Z]/g).length
  }
});

input.addEventListener("keyup", () => {
  if (input.value.match(/\d/g) == null) {
    numberCount.innerHTML = 0
  } else {
    numberCount.innerHTML = input.value.match(/\d/g).length
  }
});

input.addEventListener("keyup", () => {
  if (input.value.match(/\s/g) == null) {
    spacingCount.innerHTML = 0
  } else {
    spacingCount.innerHTML = input.value.match(/\s/g).length
  }
});
