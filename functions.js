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

/* resize about headings */
function resizeAboutHeadings() {
  const elements = document.querySelectorAll(".about-me");
  const windowWidth = window.innerWidth;

  const baseFontSize = windowWidth / 23;

  const maxFontSize = 30;

  const newFontSize = Math.min(baseFontSize, maxFontSize);

  elements.forEach((element) => {
    element.style.fontSize = newFontSize + "px";
  });
}

resizeAboutHeadings();
window.addEventListener("resize", resizeAboutHeadings);

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

/* resize about special lists */
function resizeSpecialList() {
  const elements = document.querySelectorAll(".specialList");
  const windowWidth = window.innerWidth;

  const baseFontSize = windowWidth / 35;

  const maxFontSize = 22;

  const newFontSize = Math.min(baseFontSize, maxFontSize);

  elements.forEach((element) => {
    element.style.fontSize = newFontSize + "px";
  });
}

resizeSpecialList();
window.addEventListener("resize", resizeSpecialList);

/* resize contact links */
function resizeContactLinks() {
  const elements = document.querySelectorAll(".social-net, .contact-btn");
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
document
  .getElementById("inclusiveLanguage")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.alert(
      "Inclusive language avoids words, phrases, or tones that exclude or discriminate against people. It's also known as non-discriminatory language. E.g. the use of gender-neutral terms, etc."
    );
  });
document
  .getElementById("intraIntel")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.alert(
      "Intrapersonal intelligence is the ability to understand oneself, including one's thoughts, emotions, and motivations. It also involves using this understanding to make decisions and communicate."
    );
  });
document
  .getElementById("interIntel")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.alert(
      "Interpersonal intelligence is the ability to understand, communicate and interact with others: manage relationships, understand their needs, feelings, behavior, etc. "
    );
  });
document.getElementById("emoIntel").addEventListener("click", function (event) {
  event.preventDefault();
  window.alert(
    "Emotional intelligence is the ability to understand and manage your own emotions, as well as the emotions of others. It also involves being able to relate to others and solve conflicts."
  );
});
document.getElementById("lgbtDef").addEventListener("click", function (event) {
  event.preventDefault();
  window.alert(
    "LGBTQIA+ is an acronym that stands for lesbian, gay, bisexual, transgender, queer, intersex, and asexual. The + represents other identities that are not included in the acronym."
  );
});
document.getElementById("polyDef").addEventListener("click", function (event) {
  event.preventDefault();
  window.alert(
    "Literally means: many loves. People who desire or have multiple ongoing intimate relationships, whether sexual or romantic, with the consent of everyone involved. Polyamorists want to have deeper connections with multiple people, through love, affection and communication."
  );
});
document
  .getElementById("feministDef")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.alert(
      "Any person who believes in the social, political, and economic equality of all genders, regardless of race, ethnicity, socioeconomic class, religion, ability, and sexual orientation."
    );
  });
