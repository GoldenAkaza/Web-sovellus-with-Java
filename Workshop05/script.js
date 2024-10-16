// Tehtävä 1 ja Tehtävä 4
function validateForm() {
    // Tyhjentää aiemmat virheilmoitukset ja tyylit
    clearErrors();

    // Hakee lomakkeen kenttien arvot
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var contactInput = document.getElementById('contactInput').value;
    var contactMethod = document.getElementById('contactMethod').value;
    var isValid = true;

    // Tarkistaa sähköpostin pituus ja '@'-merkin olemassaolo
    if (email.length < 6 || email.length > 15 || email.indexOf('@') === -1) {
        document.getElementById('emailError').innerText = "Sähköpostin täytyy olla 6-15 merkkiä ja sisältää '@'-merkin.";
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    // Tarkistaa, että kommenttikenttä ei ole tyhjä ja että se on alle 50 merkkiä
    if (comment.trim() === "") {
        document.getElementById('commentError').innerText = "Kommentti ei saa olla tyhjä.";
        document.getElementById('comment').classList.add('error');
        isValid = false;
    } else if (comment.trim().length > 50) {
        document.getElementById('commentError').innerText = "Kommentin täytyy olla alle 50 merkkiä.";
        document.getElementById('comment').classList.add('error');
        isValid = false;
    }

    // Tarkistaa yhteydenottotavan tiedot
    if (contactMethod && contactInput.trim() === "") {
        document.getElementById('contactError').innerText = "Tiedot ovat pakollisia valitulle yhteydenottotavalle.";
        document.getElementById('contactInput').classList.add('error');
        isValid = false;
    }

    // Jos kaikki on ok, se näyttää hälytykset syötetyistä arvoista
    if (isValid) {
        alert("Sähköposti: " + email);
        alert("Kommentti: " + comment.trim());
        alert("Yhteydenottotapa: " + contactMethod + "\nTiedot: " + contactInput.trim());
    }

    // Palautetaan false, jos validointi epäonnistui, jotta se estää lomakkeen lähetystä
    return isValid;
}

function showContactDetails() {
    const contactMethod = document.getElementById('contactMethod').value;
    const contactDetailsDiv = document.getElementById('contactDetails');
    const contactLabel = document.getElementById('contactLabel');

    // Näytettää syöttökenttään valitun yhteydenottotavan
    if (contactMethod) {
        contactDetailsDiv.classList.remove('hidden');
        contactLabel.innerText = "Syötä " + contactMethod + " tiedot:";
    } else {
        contactDetailsDiv.classList.add('hidden');
    }
}

// Funktio, joka tyhjentää virheilmoitukset ja tyylit
function clearErrors() {
    document.getElementById('emailError').innerText = "";
    document.getElementById('commentError').innerText = "";
    document.getElementById('contactError').innerText = "";
    document.getElementById('email').classList.remove('error');
    document.getElementById('comment').classList.remove('error');
    document.getElementById('contactInput').classList.remove('error');
}


// Tehtävä 2
function calculateCost() {
    // Hakee jäsenyyden tyyppi ja vuodet
    var membershipType = parseFloat(document.getElementById('membershipType').value);
    var years = parseInt(document.getElementById('years').value);

    // Laskee perushinta ilman alennuksia
    var totalCost = membershipType * years;

    // Nollaa viestit
    document.getElementById('discountMessage').innerText = "";
    document.getElementById('specialGreeting').innerText = "";

    // Tarkistaa, onko käyttäjä oikeutettu alennukseen
    if (years > 2) {
        var discount = totalCost * 0.20;  // 20% alennus
        totalCost -= discount;
        document.getElementById('discountMessage').innerText = "Saat 20% alennuksen!";
    }

    // Tarkistaa, saako käyttäjä erikoisalennuksen (yli 5 vuotta)
    if (years >= 5) {
        totalCost -= 5;  // 5€ lisäalennus
        document.getElementById('specialGreeting').innerText = "Saat 5€ lisäalennuksen, kiitos pitkästä sitoutumisesta!";
    }

    // Päivittää laskettu hinta lomakkeeseen
    document.getElementById('cost').value = totalCost.toFixed(2) + " €";
}

// Alustaa lomake laskemaan hinta ensimmäisen kerran
calculateCost();

// Tehtävä 3
// shopping.js

function calculate() {
    'use strict';

    // Määrittää muuttujat
    var total;

    // Hakee lomakkeen arvot
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var shipping = parseFloat(document.getElementById('shipping').value);

    // Laskee alkukokonaishinta:
    total = quantity * price;
    console.log("Kokonaishinta ennen veroja ja alennusta: " + total);

    // Laskee alennus prosenttina:
    var discountAmount = total * (discount / 100);

    // Jos määrä on yli 100, alennusprosentti kaksinkertaistuu:
    if (quantity > 100) {
        discountAmount *= 2; // Kaksinkertaistettu alennus
    }

    // Vähentää alennus kokonaishinnasta:
    total = total - discountAmount;
    console.log("Kokonaishinta alennuksen jälkeen: " + total);

    // Veroprosentit helppokäyttöisemmäksi:
    tax = tax / 100;
    tax = tax + 1;

    // Lisää verot kokonaishintaan:
    total = total * tax;
    console.log("Kokonaishinta verojen jälkeen: " + total);

    // Lisää toimituskulut:
    total = total + shipping;
    console.log("Kokonaishinta alennuksen, verojen ja toimituskulujen jälkeen: " + total);

    // Pyöristää kokonaishinta kahteen desimaaliin:
    total = total.toFixed(2);

    // Näytettää kokonaishinta:
    document.getElementById('total').value = total;

    // Palauttaa false, jotta lomakkeen lähetystä ei tapahdu:
    return false;
}

// Ikkunan latauksen jälkeen suorittaa init-funktio.
function init() {
    'use strict';

    // Lisää "Event listener" lomakkeelle:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;
}

// "Event listener" ikkunan lataukselle:
window.onload = init;

// Tehtävä 4
