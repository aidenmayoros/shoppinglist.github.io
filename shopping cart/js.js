function calculateTotal() {
    let dragonScales = document.getElementById("item_0").value * 12.99
    let dragonEggs = document.getElementById("item_1").value * 109.99
    let battleArmor = document.getElementById("item_2").value * 3500.00
    let healthPotion = document.getElementById("item_3").value  * 3.50

    let total = dragonScales + dragonEggs + battleArmor + healthPotion

    return document.getElementById("total").value = total.toFixed(2)
};

function validateAll() {
    let test1 = validateDate()
    let test2 = validateCreditCardNumber()
    let test3 = validatePhone()
    let test4 = isNotEmpty()
    if ((test1 && test2 && test3 && test4) == true) {
        document.getElementById("errorMessage").innerHTML = "Form successfully submitted"
    }
};



function validatePhone() {
    let phone = document.getElementById("phone").value
    if (!phone.match(/^\d{3}\-\d{3}\-\d{4}$/gm)) {
        document.getElementById("errorMessage").innerHTML = "Please fill out a phone number with a format of 999-999-9999"
        document.getElementById("phone").focus()
    }
    else {
        return true
    }
};

function validateDate() {
    let exp_date = document.getElementById("exp_date").value 
    if (!exp_date.match(/^\d{1,2}\/\d{4}$/gm)) {
        document.getElementById("errorMessage").innerHTML = "Please fill out an expiration date with a format of 11/1111"
        document.getElementById("exp_date").focus()
    }
    else {
        return true
    }
};

function validateCreditCardNumber() {
    let credit_card = document.getElementById("credit_card").value 
    if (!credit_card.match(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/gm)) {
        document.getElementById("errorMessage").innerHTML = "Please fill out a credit card number with a format of '1111 1111 1111 1111'"
        document.getElementById("credit_card").focus()
    }
    else {
        return true
    }
};

function isNotEmpty() {
    let firstName = document.getElementById("first_name").value
    let lastName = document.getElementById("last_name").value
    let address = document.getElementById("address").value

    if (!firstName) {
        document.getElementById("first_name").focus()
        document.getElementById("errorMessage").innerHTML = "Please fill out your first name"
        return
    }
    if (!lastName) {
        document.getElementById("last_name").focus()
        document.getElementById("errorMessage").innerHTML = "Please fill out your last name"
    }
    if (!address) {
        document.getElementById("address").focus()
        document.getElementById("errorMessage").innerHTML = "Please fill out your address"
    }
    else {
        return true
    }
  };