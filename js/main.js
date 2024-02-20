
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

$(function () {
  $(".heart").on("click", function () {
    $(this).toggleClass("is-active");
  });
});


function toggleClass(button) {
  button.classList.toggle('bg-mainColor');
  button.classList.toggle('text-white');
  button.classList.toggle('btn-on');
}


// 





/*
duplicateDivNTimes {
  for (i = 1; i <= 4)
    data = buttonCountNumber[i]
    if (data.val > 0)
      function duplicator(i, data[type])
}

function duplicator(i, type) {
  html = duplicate.clone(.originalDiv)
  html.num_pass = i
  html.type_pass = type
  append(html)
}
*/

// function duplicateDivNTimes() {
//   const quantityInputs = [
//     document.getElementById('buttonCountNumber1'),
//     document.getElementById('buttonCountNumber2'),
//     document.getElementById('buttonCountNumber3'),
//     document.getElementById('buttonCountNumber4')
//   ];

//   const originalDivs = [
//     document.getElementById('originalDiv1'),
//     document.getElementById('originalDiv2'),
//     document.getElementById('originalDiv3'),
//     document.getElementById('originalDiv4')
//   ];

//   const duplicatedDivsContainer = document.querySelector('.num_pass');
  
//   // Clear previously duplicated divs
//   duplicatedDivsContainer.innerHTML = '';

//   // Loop through each input field and its corresponding original div
//   quantityInputs.forEach((quantityInput, index) => {
//     const quantity = parseInt(quantityInput.textContent);

//     // Show the original div
//     // originalDivs[index].style.display = 'block';

//     // Loop to duplicate the div 'quantity' number of times
//     for (let i = 0; i < quantity; i++) {
//       // Clone the original div
//       const clonedDiv = originalDivs[index].cloneNode(true);

//       // Increment the duplicate count
//       duplicateCounts[index]++;

//       // Update the text of the cloned div to show the count
//       clonedDiv.innerText = `Duplicate ${duplicateCounts[index]} of ${originalDivs[index].innerText}`;

//       // Append the cloned div to the container for duplicated divs
//       duplicatedDivsContainer.appendChild(clonedDiv);
//     }
//   });
// }

// function clearResults() {
//   // Hide the original divs
//   document.querySelectorAll('.original-div').forEach(div => {
//     div.style.display = 'none';
//   });

//   // Clear the container for duplicated divs
//   document.getElementById('duplicatedDivs').innerHTML = '';

//   // Reset the duplicate counts
//   duplicateCounts = [0, 0, 0, 0];

//   // Reset the quantity input values
//   document.querySelectorAll('input[type="number"]').forEach(input => {
//     input.value = 1;
//   });
// }