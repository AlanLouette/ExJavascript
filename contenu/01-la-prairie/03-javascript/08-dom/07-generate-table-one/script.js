/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let target = document.getElementById("target");
    let newTable = document.createElement("table");
    target.appendChild(newTable);
    let tbody = document.createElement("tbody");
    newTable.appendChild(tbody)

    for (i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let td = document.createElement("td");
        tr.appendChild(td)
    }





})();