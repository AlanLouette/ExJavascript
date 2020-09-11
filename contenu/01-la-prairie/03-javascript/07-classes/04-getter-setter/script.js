/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        class Person {

            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }

            get name() {
                return this.firstname + " " + this.lastname;
            }
            set name(name) {
                let words = name.split(" ");
                this.firstname = words[0];
                this.lastname = words[1];
            }
        }

        let person = new Person("Alan", "Louette")
        console.log(person.name);

        person.name = ("Mathieu Thiry");
        console.log(person.name)

    })
})();