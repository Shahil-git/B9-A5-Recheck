

// create items
function create_items(seatInner, ticketPrice) {
    let new_li = document.createElement("li");

    let p1 = document.createElement("p");
    p1.innerText = seatInner;

    let p2 = document.createElement("p");
    p2.innerText = "Economy";

    let p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    new_li.appendChild(p1)
    new_li.appendChild(p2)
    new_li.appendChild(p3)
    get_element_by_id('select-ticket').appendChild(new_li)
}


let counter = 0;
let totalTickets = 0;
let addSeat = []; 
let seatItems = document.getElementsByClassName('seat-button');

for (const seat of seatItems) {
    seat.addEventListener('click', function (e) {
        
        if (counter < 4) {
            if (addSeat.includes(seat)) {
                alert("You can't select one seat more time.")
                return;
            }
            else {
                counter += 1;
                totalTickets += parseInt(get_element_by_id('seat-price').innerText);
                let seat_available = parseInt(get_element_by_id('available-seat').innerText);
                set_element_by_id('available-seat', seat_available - 1);

                // total seat
                set_element_by_id('total-price', totalTickets);
                set_element_by_id('grand-total', totalTickets);

                // seat background color
                e.target.classList.add('bg-[#1DD100]');

                // seat selected
                set_element_by_id('selected-seat', counter);

                // create seat price
                create_items(seat.innerText, get_element_by_id('seat-price').innerText);
            }
        }
        else {
            alert("You can't select more than 4 ticket");
        }        
        addSeat.push(seat);
    })
}


get_element_by_id('couponInput').addEventListener('keyup', function () {
    let userInput = get_element_by_id('couponInput').value;
    if (userInput !== '') {
        get_element_by_id('apply-btn').removeAttribute('disabled');

    }
})


function couponApply() {
    let userInput = get_element_by_id('couponInput').value;
    const coupon1 = get_element_by_id("coupon-1").innerText;
    const coupon2 = get_element_by_id("coupon-2").innerText;

    if (userInput === coupon1) {
        let discount1 = totalTickets * 0.15;
        set_element_by_id('grand-total', totalTickets - discount1);
        set_element_by_id('discount-price',discount1)
        get_element_by_id('input-filed').classList.add("hidden");
        get_element_by_id('discount').classList.remove("hidden");
    }
    else if (userInput === coupon2) {
        let discount2 = totalTickets * 0.20;
        set_element_by_id('grand-total', totalTickets - discount2);
        set_element_by_id('discount-price', discount2)
        get_element_by_id('input-filed').classList.add("hidden");
        get_element_by_id('discount').classList.remove("hidden");
    }
    else {
        alert("Your coupon is Invalid")
    }
}


get_element_by_id('submit-info').addEventListener('keyup', function () {
    get_element_by_id('modal-button').removeAttribute("disabled");
})