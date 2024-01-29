import { PrintTemplateHeader, PrintTemplateFooter } from "../components";

export const initTemplate = () => {
    const app = document.getElementById("app"); // obtencion de elementos del dom con el id app, que suele ser el contenedor principal

    const header = document.createElement("header");// crea 3 elementos HTML , que representa las secciones basicas
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    app.append(header, main, footer);// inyeccion de elementos en el contendero app

  PrintTemplateHeader();
  PrintTemplateFooter();  
};