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

// STACK

const icons = [
  "./../icons/html.svg",
  "./../icons/css.svg",
  "./../icons/js.svg",
  "./../icons/react.svg",
  "./../icons/redux.svg",
  "./../icons/bootstrap.svg",
  "./../icons/tailwind.svg",
  "./../icons/sass.svg",
  "./../icons/git.svg",
  "./../icons/guy.svg",
  "./../icons/vscode.svg",
  "./../icons/github.svg",
];
const list = document.querySelector(".stack__list");

icons.map((item) => {
  const listItem = document.createElement("li");
  const img = document.createElement("img");
  img.classList.add("stack__img");
  img.setAttribute("src", item);
  listItem.classList.add("stack__item");
  listItem.append(img);
  list.append(listItem);
});
