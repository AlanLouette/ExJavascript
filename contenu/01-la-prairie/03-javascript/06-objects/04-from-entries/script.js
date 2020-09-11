/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];
  document.getElementById("run").addEventListener("click", () => {
    // const newTab = [];
    // for (i = 0; i < keys.length; i++) {
    //     let property = [keys[i], values[i]];
    //     newTab.push(property);
    // }
    // const object = Object.fromEntries(newTab);
    // console.log(object)

    let tableauMix = keys.map((currentValue, i) => [keys[i], values[i]]);

    console.log(tableauMix);
  });
})();
