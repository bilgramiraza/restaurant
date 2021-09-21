
const clearPage = function (element){
    while(element.childElementCount){
        element.removeChild(element.firstChild);
    }

}

export default clearPage;