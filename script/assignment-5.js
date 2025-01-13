const seatsSelected = [];
function bookingSeat(ElementId) {
    const getBackgroundColor = document.getElementById(ElementId);
    const selectedSeat = getBackgroundColor.innerText;

    // console.log(seatsSelected)
    if (seatsSelected.length <= 3) {
        showTotalBookinSeat(ElementId)
        getBackgroundColor.classList.add('bg-lime-500');
        seatsSelected.push(selectedSeat);
        const arrayLenght = seatsSelected.length;
        const arrayLenghtNumber = Number(arrayLenght);
        const seatLeftNumber = seatLeft(arrayLenghtNumber);
        setElementById('show-seat-left', seatLeftNumber);
        const seatYouSelect = getElementById('selected-seat');
        const seatYouSelectNumber = Number(seatYouSelect);
        const showSeatYouSelect = seatYouSelectNumber + 1;
        setElementById('selected-seat', showSeatYouSelect);

        const showPrice = totalPrice('selected-seat');
        setElementById('tolat-price', showPrice);


    }
    if (seatsSelected.length >= 2) {
        const cupponButtonId = document.getElementById('cuppon-input');

        cupponButtonId.removeAttribute("disabled");
    }
}

function showDiscuntPrice() {
    const cupponInput = getInputValueById('discund-by-cuppon');
    if (cupponInput === 'NEW15') {
        const getTotalPrice = getElementById('tolat-price');
        const getTotalPriceNumber = Number(getTotalPrice);
        const discundPrice = getTotalPriceNumber - getTotalPriceNumber * 15 / 100;
        setElementById('grand-total', discundPrice);
        console.log(getTotalPriceNumber)
    }
    else if (cupponInput === 'Couple 20') {
        const getTotalPrice = getElementById('tolat-price');
        const getTotalPriceNumber = Number(getTotalPrice);
        const discundPrice = getTotalPriceNumber - getTotalPriceNumber * 20 / 100;
        setElementById('grand-total', discundPrice);
    }
    // else {alert('thikmoto cuppon den vai')}
}

function showTotalBookinSeat(ElementId) {
    const getBackgroundColor = document.getElementById(ElementId);
    const selectedSeat = getBackgroundColor.innerText;

    const displaySelectedTiket = document.getElementById('show-selected-seat-infu');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h1');
    const h3 = document.createElement('h1');

    div.classList = "flex justify-between text-gray-500";

    h1.innerText = selectedSeat;
    h2.innerText = 'Economy';
    h3.innerText = '550';
    div.appendChild(h1);
    div.appendChild(h2)
    div.appendChild(h3)
    displaySelectedTiket.appendChild(div);


}