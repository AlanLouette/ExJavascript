/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  age = prompt("Quel est votre âge ?");
  sexe = prompt("Quel est votre sexe ?");
  ville = prompt("Où habites-tu ?");
  alert(
    "Vous avez " +
      age +
      "ans, habitez à " +
      ville +
      " et vous êtes de sexe " +
      sexe
  );
})();
