/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronList = new Array("yo", "tu", "el", "nosotros", "vosotros", "ellos");
const adjList = new Array("Optimo", "Afortunado", "Amarillo", "Alto");
const sustList = new Array("Perretes", "Gatetes", "Formula1");
const final = new Array(".com", ".es", ".edu", ".net");

function generarNombresDominio(pronList, adjList, sustList) {
  pronList.forEach(pronombre => {
    adjList.forEach(adjetivo => {
      sustList.forEach(sustantivo => {
        final.forEach(final => {
          const extension = final.replace(".", "");
          if (sustantivo.endsWith(extension)) {
            const sustantivoRecortado = sustantivo.slice(0, -extension.length);
            console.log(
              `${pronombre}${adjetivo}${sustantivoRecortado}${final}`
            );
          } else {
            console.log(`${pronombre}${adjetivo}${sustantivo}${final}`);
          }
        });
      });
    });
  });
}

generarNombresDominio(pronList, adjList, sustList);
