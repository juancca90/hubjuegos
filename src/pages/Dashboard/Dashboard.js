import { game_over, getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMole">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigatePagina">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  const navigateMole = document.getElementById("navigateMole");
  const navigatePagina = document.getElementById("navigatePagina");

  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  navigateMole.addEventListener("click", () => {
    initControler("Topo");
  });

  navigatePagina.addEventListener("click", () => {
    initControler("Ahorcado");
  });

  
};



export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();
  getInfo();
  
};