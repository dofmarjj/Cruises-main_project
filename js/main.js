// var clonedDivs = [];
// var duplicateCount = 0;
// let times = document.getElementById("buttonCountNumber1").textContent;
// console.log(times)

let duplicateCounts = [0, 0, 0, 0];

function toggleMenu() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#mobile-menu");
  const html = document.querySelector("html");
  const color = document.querySelector("#color");
  const colorС = document.querySelector("#color-с");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");

    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    html.classList.toggle("fix");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1299.99) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      burger.classList.remove("active");
    }
  });
}
toggleMenu();

const dollar = document.getElementById("dollar");
const crypto = document.getElementById("crypto");

dollar.addEventListener("click", () => {
  if (dollar.classList.contains("active_money")) {
    dollar.classList.remove("active_money");
  } else {
    dollar.classList.add("active_money");
  }
});

crypto.addEventListener("click", () => {
  if (crypto.classList.contains("active_money")) {
    crypto.classList.remove("active_money");
  } else {
    crypto.classList.add("active_money");
  }
});

// Swiper filter cruise type

$(document).ready(function () {
  $(".btn-lab").on("click", ".btn", function () {
    // Delete class active

    $(".btn-lab").find(".active-bg").removeClass("active-bg");

    //   Add class active
    $(this).addClass("active-bg");
    $(".btn").eq($(this).index()).addClass("active-bg");

    console.log();
  });
});

const region = document.getElementById("region");
const river = document.getElementById("river");
const button = document.getElementById("btn-type");
const button2 = document.getElementById("btn-type2");
// button.addEventListener("click", function () {
//   if (test.classList.contains("a")) {
//     test.classList.remove("a");
//   } else {
//     test.classList.add("a");
//   }
// });

function addClass() {
  if (river.classList.contains("show")) {
    river.classList.remove("show");
    region.classList.add("show");
  }
}
function addClass2() {
  if (region.classList.contains("show")) {
    region.classList.remove("show");
    river.classList.add("show");
  }
}

button.addEventListener("click", addClass);
button2.addEventListener("click", addClass2);

// Hurt

// $(function () {
//   $(".heart").on("click", function () {
//     $(this).toggleClass("is-active");
//   });
// });

function toggleClass(button) {
  button.classList.toggle("bg-mainColor");
  button.classList.toggle("text-white");
  button.classList.toggle("btn-on");
}

function changeActiveState(element) {
  var blocks = document.querySelectorAll(".card");
  blocks.forEach(function (block) {
    block.classList.remove("border-mainColor");
    block.setAttribute("data-active", "0");
  });
  element.classList.add("border-mainColor");
  element.setAttribute("data-active", "1");
}
