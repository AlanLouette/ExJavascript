/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let tableau = [];

    function random() {
      return Math.floor(Math.random() * Math.floor(100));
    }

    for (let i = 1; i <= 10; i++) {
      objet = document.getElementById("n-" + i).innerHTML = random();
      tableau.push(objet);
    }

    console.log(tableau);
    console.log(...tableau);
    let min = Math.min(...tableau);
    let max = Math.max(...tableau);
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    let somme = tableau.reduce((accu, val) => val + accu, 0);
    document.getElementById("sum").innerHTML = somme;
    let avg = somme / tableau.length;
    document.getElementById("average").innerHTML = avg;
  });
})();
