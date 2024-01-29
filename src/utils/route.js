import { getUser } from "../global/state/globalState";
import { Login, PrintAhorcado, PrintPokemonPage, printTemplateDashboard, PrintTopoPage } from "../pages";

export const initControler = (pageRender) => {
    switch (pageRender) {
        case undefined:
            localStorage.getItem(getUser().name)? printTemplateDashboard() : Login();
            break;
        case "Pokemon":
            PrintPokemonPage();
            break;
        case "Dashboard":
            printTemplateDashboard();
            break;
        case "Topo":
            PrintTopoPage();
            break;
        case "Login":
            Login();
            break;
        case "Ahorcado":
            PrintAhorcado();
            break;
    }
};