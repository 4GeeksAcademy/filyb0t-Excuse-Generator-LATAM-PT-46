import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

};
function randomELement (array){
  return array[ Math.floor(Math.random() * array.length)]
}

let generateExcuse = () => {
  let pronouns = ["A", "The"];
  let subjects = [
    "jug",
    "raccon",
    "rat",
    "taxi driver",
    "president",
    "teacher",
    "figther"
  ];
  let actions = ["stole my", "took my", "drop my", "strike my", "bite my"];
  let possetions = ["Homework", "Lunch", "Arm", "pistol", "phone", "toe"];
  let places = ["street", "stadium", "my house", "church", "school"];

  let pronoun = randomELement(pronouns)
  let subject = randomELement(subjects)
  let action = randomELement(actions)
  let possetion = randomELement(possetions)
  let where = randomELement(places)

  return (
    pronoun +
    " " +
    subject +
    " " +
    action +
    " " +
    possetion+
    " " +
    where
  );
};
