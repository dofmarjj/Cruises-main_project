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


// add block info


// function addBlock(parent) {
//   const main = document.createElement("div")
//   main.className = "partners"
//   main.innerHTML = `
//       <div>
//         <h2 class="text-center">Дані пасажирів</h2>
//         <p class="text-center text-base text-titleText mt-10">
//           Пасажир 1<span class="text-black"> (Дорослий 55+)</span>
//         </p>
//         <form
//           class="grid grid-cols-2 gap-y-4 gap-x-6 mt-9 max-w-[728px] mx-auto xs:flex xs:flex-col">
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="Ім’я"
//             /></label>
//           </p>
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="Громадянство"
//             /></label>
//           </p>
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="Прізвище"
//             /></label>
//           </p>

//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="№ паспорту"
//             /></label>
//           </p>
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border border-[#B1B1B1] rounded-lg py-2 px-3 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="Дата народження"
//             /></label>
//           </p>
//           <div class="flex flex-row justify-between gap-3">
//             <p class="flex flex-col text-[#212529] text-[12px]">
//               <label
//                 ><input
//                   type="text"
//                   name="name"
//                   class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                   placeholder="Дата видачі"
//               /></label>
//             </p>
//             <p class="flex flex-col text-[#212529] text-[12px]">
//               <label
//                 ><input
//                   type="text"
//                   name="name"
//                   class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                   placeholder="Дійсний до"
//               /></label>
//             </p>
//           </div>
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-black mt-2"
//                 placeholder="+380"
//             /></label>
//           </p>
//           <p class="flex flex-col text-[#212529] text-[12px]">
//             <label
//               ><input
//                 type="text"
//                 name="name[]"
//                 class="w-full border rounded-lg py-2 border-[#B1B1B1] px-2 placeholder:text-[rgba(33, 37, 41, 0.10)] mt-2"
//                 placeholder="E-mail"
//             /></label>
//           </p>
//         </form>
//       </div>`

//   main.getElementsByClassName("btn")[0].onclick = () => {
//       parent.removeChild(main)
//   }

//   parent.appendChild(main)
// }

// document.getElementById("brand_plus").onclick = () => {
//   addBlock(document.getElementById("partners_block"))
// }

// addBlock(document.getElementById("partners_block"))