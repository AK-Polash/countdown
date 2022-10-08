let date = document.querySelector(".date");
let start = 0;

let countUp = () => {
  start++;
  date.innerHTML = start;
  if (start == date.dataset.date) {
    clearInterval(stop);
  }
};

let stop = setInterval(() => {
  // countUp();
}, 700);

countUp();
console.log("value is: " + start);
countUp();
console.log("value is: " + start);
countUp();
console.log("value is: " + start);
