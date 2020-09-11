/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click", () => {
        fetch('http://localhost:3000/heroes')
            .then((response) => {
                return response.json();
            })
            .then((heroes) => {
                const template = document.querySelector('#tpl-hero');
                const target = document.querySelector('#target');
                heroes.forEach(hero => {
                    const clone = document.importNode(template.content, true);
                    const name = clone.querySelector(".name");
                    const alterEgo = clone.querySelector(".alter-ego");
                    const powers = clone.querySelector(".powers");
                    name.innerText = hero.name;
                    target.appendChild(clone);
                    alterEgo.innerText = hero.alterEgo;
                    target.appendChild(clone);
                    powers.innerText = hero.abilities;
                    powers.appendChild(clone);
                });

            });
    })
})();