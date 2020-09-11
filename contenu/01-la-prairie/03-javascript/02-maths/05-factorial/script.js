/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    var nombre = document.getElementById("number").value;
    var i = nombre - 1;
    if (nombre < 0) {
      alert("Veuillez saisir un entier positif ou nul");
      return 0;
    }
    if (nombre == 0) {
      alert("1");
    }

    while (i > 0) {
      nombre *= i;
      i--;
    }
    alert(nombre);
  });
})();
