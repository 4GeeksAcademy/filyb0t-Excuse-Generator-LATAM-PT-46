/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Everything is working!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "jug",
    "raccon",
    "rat",
    "taxi driver",
    "president",
    "teacher",
    "figther"
  ];
  let action = ["stole my", "took my", "drop my", "strike my", "bite my"];
  let possetion = ["Homework", "Lunch", "Arm", "pistol", "phone", "toe"];
  let where = ["street", "stadium", "my house", "church", "school"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
