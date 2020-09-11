/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let elementPass1 = document.getElementById("pass-one");
    document.addEventListener("input", event => {
        let mdpLength = elementPass1.value.length;
        let mdp = elementPass1.value;
        if ((mdpLength > 8) && (/[0-9]{2}/.test(mdp))) {
            document.getElementById("validity").innerHTML = "Ok";
        } else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }
    })
})();