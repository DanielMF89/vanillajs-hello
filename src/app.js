/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excusa").innerHTML = generarExcusa();
  console.log("Generador De Excusas");
};

let generarExcusa = () => {
  let Quien = ["Mi perro", "Mi vecino", "Mi cuñado", "Mi hija"];
  let Hizo = ["comio mi", "tiro mi", "robo mi", "ensucio mi"];
  let Evitar = ["comida", "proyecto", "ropa", "movil"];
  let Donde = ["en casa", "en el trabajo", "en la calle"];

  let QuIndx = Math.floor(Math.random() * Quien.length);
  let HiIndex = Math.floor(Math.random() * Hizo.length);
  let EvIndex = Math.floor(Math.random() * Evitar.length);
  let DoIndex = Math.floor(Math.random() * Donde.length);

  return (
    Quien[QuIndx] +
    " " +
    Hizo[HiIndex] +
    " " +
    Evitar[EvIndex] +
    " " +
    Donde[DoIndex]
  );
};
