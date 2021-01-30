function curiseTicketBookPlusMinus(curiseTicketType, isIncrease) {
    //This is about curise ticket book count.
    const curiseTicketCount = getTicketInput(curiseTicketType);
    let curiseTicketTotalCount = curiseTicketCount;
    if (isIncrease == true) {
        curiseTicketTotalCount = curiseTicketCount + 1;
    } else if (isIncrease == false && curiseTicketCount > 0) {
        curiseTicketTotalCount = curiseTicketCount - 1;
    }
    document.getElementById(curiseTicketType + 'TicketInput').value = curiseTicketTotalCount;

    //This is about curise ticket price.
    let curiseTicketPrice = 0;
    if (curiseTicketType == 'firstClass') {
        curiseTicketPrice = curiseTicketTotalCount * 150;
    } else if (curiseTicketType = 'economy') {
        curiseTicketPrice = curiseTicketTotalCount * 100;
    }
    totalTicketPrice();
}


//This funciton is about curise ticket input value.
function getTicketInput(curiseTicketType) {
    const ticketInput = document.getElementById(curiseTicketType + 'TicketInput');
    const curiseTicketCount = parseInt(ticketInput.value);
    return curiseTicketCount;
}


// This function is about count total curise ticket price. 
function totalTicketPrice() {
    const firstClassTicketCount = getTicketInput('firstClass');
    const economyTicketCount = getTicketInput('economy');
    const subtotalTicketPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subtotalTicketPrice').innerText = subtotalTicketPrice;

    const ticketTax = subtotalTicketPrice * 0.1;
    document.getElementById('ticketTax').innerText = Math.round(ticketTax)

    const totalTicketPrice = subtotalTicketPrice + ticketTax;
    document.getElementById('totalTicketPrice').innerText = totalTicketPrice;
}


// This is about curise ticket successful message
function curiseTicketBooking() {
    document.getElementById('bookingForm').style.display = "none";
    document.getElementById('bookingContent').style.display = "none";
    document.getElementById('successMessage').style.display = "block";
}