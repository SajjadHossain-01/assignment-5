function setElementById (ElementId,value){
    const setElement = document.getElementById(ElementId);
    setElement.innerText = value ;
}

function getInputValueById(Element){
    const getElement = document.getElementById(Element);
    const addElement = getElement.value;
    return addElement;
}
function getElementById(Element) {
    const getElement = document.getElementById(Element);
    const addElement = getElement.innerText;
    return addElement;
}

function seatLeft(ElementId){
    const seatLeft = 40 - ElementId;
    return seatLeft;
}

function totalPrice (ElementId){
    const elementId =document.getElementById(ElementId);
    const elementIdText =elementId.innerText;
    const elementIdNumber= Number(elementIdText);
    const newPrice = elementIdNumber * 550;
    return newPrice;
}