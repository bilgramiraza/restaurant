import buildHomePage from "./basePage";
import buildMenuPage from "./menuPage";
import buildContactPage from "./contactPage";

const pageSwapper = function (id,element){
    switch (id) {
        case "Button1":
            buildHomePage(element);    
            break;
        case "Button2":
            buildMenuPage(element);
            break;
        case "Button3":
            buildContactPage(element);
            break;
    }
}
export default pageSwapper;