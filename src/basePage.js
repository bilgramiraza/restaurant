import './style.css'
import Pic from './Image.jpg'
const buildHomePage = function (element){
    const heading = document.createElement('h1');
    heading.textContent = "RESTAURANT PAGE";

    const img = new Image();
    img.src = Pic;
    img.width="200";
    img.height="250";

    const paragraph = document.createElement('p');
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur" + 
                            "adipisicing elit. Tempore, tenetur commodi "+
                            "in voluptatem explicabo beatae, pariatur "+
                            "ratione vero sunt quo a, esse soluta molestias perspiciatis!";
    paragraph.classList.add('color');


    element.appendChild(heading);
    element.appendChild(img);
    element.appendChild(paragraph);

}

export default buildHomePage;