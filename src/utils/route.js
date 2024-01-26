import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";

export const initControler = (pageRender) => {
    switch (pageRender) {
        case undefined:
            localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
            break;
        case "Pokemon":
            PrintPokemonPage();
            break;
        case "Dashboard":
            printTemplateDashboard();
            break;
        case "Topo":
            "PrintTopoPage()" //**En caso de que lo haya */
            break;
        case "Login":
            Login();
            break;
        case "Memory":
            "PrintMemoryPage()" //**En caso de que lo haya */
            break;
    }
};