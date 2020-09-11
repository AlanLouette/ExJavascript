/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let elementPass1 = document.getElementById("pass-one");
    let compteur1 = document.getElementById('counter');
    document.addEventListener("input", event => {
        let mdp = elementPass1.value.length;
        if (mdp > 10) {
            elementPass1.setAttribute('maxLength', "10");

            //       compteur1.innerHTML = ("10/10")
        } else {
            compteur1.innerHTML = (mdp + "/10")
        }
    });


})();