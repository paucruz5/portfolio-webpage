/* resize hero headings */
function resizeHeroHeading() {
  const elements = document.querySelectorAll(".hero-heading");
  const windowWidth = window.innerWidth;

  const baseFontSize = windowWidth / 15;

  const maxFontSize = 50;

  const newFontSize = Math.min(baseFontSize, maxFontSize);

  elements.forEach((element) => {
    element.style.fontSize = newFontSize + "px";
  });
}

resizeHeroHeading();
window.addEventListener("resize", resizeHeroHeading);

/* resize about lists */
function resizeList() {
  const elements = document.querySelectorAll(".list");
  const windowWidth = window.innerWidth;

  const baseFontSize = windowWidth / 30;

  const maxFontSize = 22;

  const newFontSize = Math.min(baseFontSize, maxFontSize);

  elements.forEach((element) => {
    element.style.fontSize = newFontSize + "px";
  });
}

resizeList();
window.addEventListener("resize", resizeList);

/* resize contact links */
function resizeContactLinks() {
  const elements = document.querySelectorAll(".social-contact, .contact-btn");
  const windowWidth = window.innerWidth;

  const baseFontSize = windowWidth / 30;

  const maxFontSize = 35;

  const newFontSize = Math.min(baseFontSize, maxFontSize);

  elements.forEach((element) => {
    element.style.fontSize = newFontSize + "px";
  });
}

resizeContactLinks();
window.addEventListener("resize", resizeContactLinks);

/* Event listeners for word definitions */
document.getElementById("lgbtDef").addEventListener("click", function (event) {
  event.preventDefault();
  window.alert(
    "LGBTQIA+ is an acronym that stands for lesbian, gay, bisexual, transgender, queer, intersex, and asexual. The + represents other identities that are not included in the acronym.",
  );
});
document.getElementById("polyDef").addEventListener("click", function (event) {
  event.preventDefault();
  window.alert(
    "Literally means: many loves. People who desire or have multiple ongoing intimate relationships, whether sexual or romantic, with the knowledge and consent of everyone involved. Polyamorists want to have deeper connections with multiple people, through love, affection, sex and communication.",
  );
});
document
  .getElementById("feministDef")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.alert(
      "Any person who believes in the social, political, and economic equality of all genders, regardless of race, ethnicity, socioeconomic class, religion, ability, and sexual orientation.",
    );
  });
