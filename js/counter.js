let buttonCountPlus1 = document.getElementById("buttonCountPlus1");
let buttonCountMinus1 = document.getElementById("buttonCountMinus1");
let count1 = document.getElementById("buttonCountNumber1");

let buttonCountPlus2 = document.getElementById("buttonCountPlus2");
let buttonCountMinus2 = document.getElementById("buttonCountMinus2");
let count2 = document.getElementById("buttonCountNumber2");

let buttonCountPlus3 = document.getElementById("buttonCountPlus3");
let buttonCountMinus3 = document.getElementById("buttonCountMinus3");
let count3 = document.getElementById("buttonCountNumber3");

let buttonCountPlus4 = document.getElementById("buttonCountPlus4");
let buttonCountMinus4 = document.getElementById("buttonCountMinus4");
let count4 = document.getElementById("buttonCountNumber4");

// let count = document.getElementById("num");
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;

buttonCountPlus1.onclick = function () {
  if (number1 <= 100) {
    number1++;
    count1.innerHTML = number1;
  }
};
buttonCountPlus2.onclick = function () {
  if (number2 <= 100) {
    number2++;
    count2.innerHTML = number2;
  }
};

buttonCountPlus3.onclick = function () {
  if (number3 <= 100) {
    number3++;
    count3.innerHTML = number3;
  }
};
buttonCountPlus4.onclick = function () {
  if (number4 <= 100) {
    number4++;
    count4.innerHTML = number4;
  }
};

buttonCountMinus1.onclick = function () {
  if (number1 >= 1) {
    number1--;
    count1.innerHTML = number1;
  }
};
buttonCountMinus2.onclick = function () {
  if (number2 >= 1) {
    number2--;
    count2.innerHTML = number2;
  }
};

buttonCountMinus3.onclick = function () {
  if (number3 >= 1) {
    number3--;
    count3.innerHTML = number3;
  }
};
buttonCountMinus4.onclick = function () {
  if (number4 >= 1) {
    number4--;
    count4.innerHTML = number4;
  }
};
