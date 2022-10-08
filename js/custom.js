let count = document.querySelectorAll(".heading");
let myArr = Array.from(count);

myArr.map((item) => {
  let start = 0;

  function countUp() {
    start++;
    item.innerHTML = start;
    if (start == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    countUp();
  }, 1000 / item.dataset.number);
});
