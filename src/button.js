const addButtons = function (element){

    const btn1 = document.createElement('button');
    btn1.textContent= "Page 1";
    btn1.setAttribute('id','Button1');
    const btn2 = document.createElement('button');
    btn2.textContent= "Page 2";
    btn2.setAttribute('id','Button2');
    const btn3 = document.createElement('button');
    btn3.textContent= "Page 3";
    btn3.setAttribute('id','Button3');

    element.appendChild(btn1);
    element.appendChild(btn2);
    element.appendChild(btn3);
}

export default addButtons;