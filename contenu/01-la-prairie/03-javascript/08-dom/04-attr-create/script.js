/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //  let image = document.querySelector("data-image.material");
    let idImage = document.getElementById("source")
    let image = idImage.getAttribute('data-image');
    console.log(image)
    let balise = document.getElementById("target");

    balise.innerHTML = "<img src='" + image + "' >"
    document.getElementById("source").remove;
})();