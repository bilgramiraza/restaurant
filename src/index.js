import buildHomePage from "./basePage";
import pageSwapper from "./pageSwapper";
import clearPage from "./clearPage";
import addButtons from "./button";

const contentdiv = document.querySelector('#content');
const buttondiv = document.createElement('div');
buttondiv.id = 'navbar';
buildHomePage(contentdiv);
addButtons(buttondiv);
document.body.appendChild(buttondiv);

const buttons = document.querySelectorAll('button');



buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
    clearPage(contentdiv);
    pageSwapper(event.target.id,contentdiv);
    });
});