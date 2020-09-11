const race1 = document.getElementById("raceV1");
const race2 = document.getElementById("raceV2");
const item1 = document.getElementById("itemV1")
const item2 = document.getElementById("itemV2")

race1.addEventListener("change", event => {
  const valeur = event.target.value;
  document.querySelector(".p1_race").src = "image/" + valeur + "_fighter.png"
})
race2.addEventListener("change", event => {
  const valeur = event.target.value;
  document.querySelector(".p2_race").src = "image/" + valeur + "_fighter.png"
})

item1.addEventListener("change", event => {
  const valeur = event.target.value;
  document.querySelector(".p1_item").src = "image/" + valeur + "_item.png"
})

item2.addEventListener("change", event => {
  const valeur = event.target.value;
  document.querySelector(".p2_item").src = "image/" + valeur + "_item.png"
})

document.querySelector(".validName").addEventListener("click", () => {
  let name1 = document.getElementById("hero-id").value;
  let name2 = document.getElementById("ennemy-id").value;
  document.getElementById("input1").innerHTML = name1;
  document.getElementById("input2").innerHTML = name2;
  document.getElementById("race").hidden = true;
  document.getElementById("item").hidden = true;
  document.getElementById("validName2").hidden = true;
});