function toggleMenu() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#mobile-menu");
  const color = document.querySelector("#color");
  const colorС = document.querySelector("#color-с");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");

    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
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
