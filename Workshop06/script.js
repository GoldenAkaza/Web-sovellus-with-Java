//Exercise 1
function saveData() {
    const destination = document.getElementById("destination").value;
    const arrivalDate = document.getElementById("arrivalDate").value;

    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    const formData = {
        destination: destination,
        arrivalDate: arrivalDate,
        services: services
    };

    // Save the form data to localStorage
    localStorage.setItem("travelFormData", JSON.stringify(formData));

    alert("Data saved to LocalStorage!");
}

//Exercise 2
function loadData() {
    const sessionDataDiv = document.getElementById("sessionData");
    const savedData = localStorage.getItem("travelFormData");

    if (savedData) {
        const formData = JSON.parse(savedData);

        // Format the data as HTML
        const formattedData = `
            <p><strong>Destination:</strong> ${formData.destination}</p>
            <p><strong>Arrival Date:</strong> ${formData.arrivalDate}</p>
            <p><strong>Services:</strong> ${formData.services.length > 0 ? formData.services.join(", ") : "None"}</p>
        `;

        sessionDataDiv.innerHTML = formattedData;
    } else {
        sessionDataDiv.textContent = "No session data available.";
    }
}


/* Exercise 3


function saveDataToSessionStorage() {
    const destination = document.getElementById("destination").value;
    const arrivalDate = document.getElementById("arrivalDate").value;

    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    const formData = {
        destination: destination,
        arrivalDate: arrivalDate,
        services: services
    };

    // Save the form data to sessionStorage
    sessionStorage.setItem("travelFormData", JSON.stringify(formData));

    alert("Data saved to SessionStorage!");
}

function loadDataFromSessionStorage() {
    const sessionDataDiv = document.getElementById("sessionData");
    const savedData = sessionStorage.getItem("travelFormData");

    if (savedData) {
        const formData = JSON.parse(savedData);

        // Format the data as HTML
        const formattedData = `
            <p><strong>Destination:</strong> ${formData.destination}</p>
            <p><strong>Arrival Date:</strong> ${formData.arrivalDate}</p>
            <p><strong>Services:</strong> ${formData.services.length > 0 ? formData.services.join(", ") : "None"}</p>
        `;

        sessionDataDiv.innerHTML = formattedData;
    } else {
        sessionDataDiv.textContent = "No session data available.";
    }
}


LocalStoragessa tiedot pysyvät talletettuna kun välilehden sulkee. 
SessionStorage taas ei talleta tietotoja välilehden suljettua vaan se poistaa sen SessionStoragesta.

LocalStoragea voi käyttää asioihin, jotka voidaan tallentaa tiedot pitkäaikaisesti, jos halutaan käyttää uudestaan ja
SessionStoragea on enemmänkin väliaikaisen tallennusta varten esim. jos asia yksityistä niin se ei tallentaisi Storageen.


*/