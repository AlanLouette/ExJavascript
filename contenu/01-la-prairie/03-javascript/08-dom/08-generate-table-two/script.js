/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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

    for (i = 1; i <= 10; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (count = 1; count <= 10; count++) {
            let td = document.createElement("td");
            tr.appendChild(td)
            result = i * count;
            let text2 = document.createTextNode(result + " ")
            td.appendChild(text2);
        }
    }
})();