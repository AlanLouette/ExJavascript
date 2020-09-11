/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let button = document.querySelector('button')
    button.addEventListener("click", () => {
        let elementPass1 = document.getElementById("pass-one");
        let elementPass2 = document.getElementById("pass-two");
        let mdp1 = elementPass1.value;
        let mdp2 = elementPass2.value;

        if (mdp1 == mdp2) {
            console.log("Ok")
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
        } else {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
    })
})();