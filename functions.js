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
