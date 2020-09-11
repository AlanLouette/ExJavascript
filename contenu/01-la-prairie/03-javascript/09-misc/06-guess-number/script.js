/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let repIA = Math.floor(Math.random() * Math.floor(100))
    console.log(repIA)
    let rep;
    let count = 0;
    do {
        rep = parseInt(prompt("Veuillez choisir un nombre entre 1 et 100"));
        count++;
        if (repIA > rep) {
            alert("Plus grand");
        } else if (repIA < rep) {
            alert("Plus petit")
        }



    } while (repIA !== rep);
    alert("Bravo!");
    console.log("Nombre d'essais : " + count)
})();