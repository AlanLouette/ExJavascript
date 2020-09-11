/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var année = document.getElementById("year").value;
        var mois = 0;
        var count = 0;
        var day = 13;

        for (mois = 0; mois < 12; mois++) {

            var time = new Date(année, mois, day); // On définit le nom de notre date avec ses propriétés
            var weekDay = time.getDay() // On appelle Time et on demande le jour

            if (weekDay == 5) {
                alert(time);
                count++;
            }
            day = 13;
        }
        alert(count);


    })
})();