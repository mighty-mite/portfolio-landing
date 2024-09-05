const menuBtn = document.querySelector(".menu__btn");
const menuBox = document.querySelector(".menu__box");
const menuInput = document.querySelector("#menu__toggle");

menuBtn.addEventListener("click", () => {
  const isChecked = menuInput.checked;
  if (!isChecked) {
    menuBox.style.right = "0px";
  } else {
    menuBox.style.right = "-100%";
  }
});
