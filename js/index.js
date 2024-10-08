const repoName =
  window.location.hostname === "localhost"
    ? ""
    : "https://mighty-mite.github.io/portfolio-landing/";

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
const imgSrc = `${repoName}/img/photo.png`;
const icons = [
  `${repoName}/icons/html.svg`,
  `${repoName}/icons/css.svg`,
  `${repoName}/icons/js.svg`,
  `${repoName}/icons/react.svg`,
  `${repoName}/icons/redux.svg`,
  `${repoName}/icons/bootstrap.svg`,
  `${repoName}/icons/tailwind.svg`,
  `${repoName}/icons/sass.svg`,
  `${repoName}/icons/git.svg`,
  `${repoName}/icons/guy.svg`,
  `${repoName}/icons/vscode.svg`,
  `${repoName}/icons/github.svg`,
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

// CARDS

function createElement(
  tag,
  className,
  attributeName,
  attribute,
  textContent,
  parent
) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (attributeName && attribute)
    element.setAttribute(attributeName, attribute);
  if (textContent && typeof textContent === "string") {
    if (document.body.clientWidth >= 1280) {
      element.textContent = textContent;
    } else if (document.body.clientWidth < 1280 && textContent.length > 30) {
      const trimmed = textContent.slice(0, 30) + "...";
      element.textContent = trimmed;
    } else {
      element.textContent = textContent;
    }
  }
  if (parent) parent.append(element);

  return element;
}

const text =
  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content";

const cardBkgs = [
  `${repoName}/card-bkg/1.png`,
  `${repoName}/card-bkg/2.png`,
  `${repoName}/card-bkg/3.png`,
  `${repoName}/card-bkg/4.png`,
  `${repoName}/card-bkg/5.png`,
  `${repoName}/card-bkg/6.png`,
];

const cardList = document.querySelector(".projects__list");

cardBkgs.map((item) => {
  const li = createElement("li", "card", null, null, null, cardList);
  const img = createElement("img", "card__img", "src", item, null, li);
  const contentContainer = createElement(
    "div",
    "card__content",
    null,
    null,
    null,
    li
  );
  const heading = createElement(
    "h3",
    "card__heading",
    null,
    null,
    "Project tile goes here",
    contentContainer
  );
  const description = createElement(
    "p",
    "card__description",
    null,
    null,
    text,
    contentContainer
  );

  const stackContainer = createElement(
    "div",
    "card__stack-container",
    null,
    null,
    null,
    contentContainer
  );
  const heading2 = createElement(
    "h3",
    "card__heading-2",
    null,
    null,
    "Tech Stack:",
    stackContainer
  );
  const stack = createElement(
    "p",
    "card__stack",
    null,
    null,
    "HTML, JavaScript, SASS, React",
    stackContainer
  );

  const linksContainer = createElement(
    "div",
    "card__links",
    null,
    null,
    null,
    contentContainer
  );
  const liveLink = createElement(
    "a",
    "card__live",
    "href",
    "#",
    null,
    linksContainer
  );
  const liveImg = createElement(
    "img",
    "card__live-img",
    "src",
    "./img/link.svg",
    null,
    liveLink
  );
  const liveText = createElement(
    "span",
    "card__live-text",
    "",
    "",
    "Live Preview",
    liveLink
  );

  const githubLink = createElement(
    "a",
    "card__github",
    "href",
    "#",
    null,
    linksContainer
  );
  const githubImg = createElement(
    "img",
    "card__github-img",
    "src",
    "./img/github-black.svg",
    null,
    githubLink
  );
  const githubText = createElement(
    "span",
    "card__github-text",
    "",
    "",
    "Code Preview",
    githubLink
  );
});

window.addEventListener("resize", (e) => {
  const width = document.body.clientWidth;
  const descriptions = document.querySelectorAll(".card__description");
  descriptions.forEach((item) => {
    if (width < 1280) {
      const trimmed = text.slice(0, 30) + "...";
      item.textContent = trimmed;
    } else {
      item.textContent = text;
    }
  });
});
