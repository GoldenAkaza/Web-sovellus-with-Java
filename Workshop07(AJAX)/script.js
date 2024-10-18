// Excercise 1
function parseData() {
    // Sample XML structure
    const xmlData = `
    <quotes>
        <quote>
            <text>I'm not concerned about all hell breaking loose, but that a PART of hell will break loose... it'll be much harder to detect.</text>
            <author>George Carlin</author>
        </quote>
        <quote>
            <text>The biggest problem with every art is by the use of appearance to create a loftier reality.</text>
            <author>Johann Wolfgang von Goethe</author>
        </quote>
    </quotes>`;

    // Parse the XML string to an XML Document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "application/xml");

    // Gets all the quote elements
    const quotes = xmlDoc.getElementsByTagName('quote');
    let output = '';

    // Loops through each quote and extract the text and author
    for (let i = 0; i < quotes.length; i++) {
        const text = quotes[i].getElementsByTagName('text')[0].textContent;
        const author = quotes[i].getElementsByTagName('author')[0].textContent;
        output += `<p><strong>Quote:</strong> ${text} <br> <strong>Author:</strong> ${author}</p>`;
    }

    // Displays the output in the div
    document.getElementById('output').innerHTML = output;
}


// Excercise 2
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    // Specifies the URL to be fetched
    xmlhttp.open("GET", "https://dummyjson.com/quotes", true);
    xmlhttp.send();

    // Defines the function to execute when the response is ready
    xmlhttp.onreadystatechange = function() {
        // Checks if the request is complete and successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Finds the 'quotes' div and inserts the raw XML content
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}


// Excercise 3
function loadData() {
    // Create an XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Specify the URL to be fetched (JSON file)
    xmlhttp.open("GET", "https://dummyjson.com/quotes", true);
    xmlhttp.send();

    // Define the function to execute when the response is ready
    xmlhttp.onreadystatechange = function() {
        // Check if the request is complete and was successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Parse the JSON response
            var jsonResponse = JSON.parse(xmlhttp.responseText);

            // Extract the quotes array from the response
            var quotes = jsonResponse.quotes;

            // Get the table body where data will be injected
            var tableBody = document.querySelector("#tabledata tbody");


            tableBody.innerHTML = `
                <tr>
                    <td><strong>Quote</strong></td>
                    <td><strong>Author</strong></td>
                </tr>
            `;

            // Loop through each quote and add it to the table
            quotes.forEach(function(quote) {
                var row = document.createElement('tr');
                row.innerHTML = `<td>${quote.quote}</td><td>${quote.author}</td>`;
                tableBody.appendChild(row);
            });
        }
    };
}


// Exercise 4
function loadNews() {
    // Create an XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Specify the URL to be fetched (RSS feed)
    xmlhttp.open("GET", "https://meijastiina.github.io/news_rss_topstories.xml", true);
    xmlhttp.send();


    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var xmlDoc = xmlhttp.responseXML;


            var items = xmlDoc.getElementsByTagName("item");

 
            var newsList = document.getElementById("newsList");

            // Clears any existing news items
            newsList.innerHTML = '';

            // Loops through the items and extract the title and link
            for (var i = 0; i < items.length; i++) {
                var title = items[i].getElementsByTagName("title")[0].textContent;
                var link = items[i].getElementsByTagName("link")[0].textContent;

                // Creates an li element with a clickable link
                var listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;

                // Appends the list item to the news list
                newsList.appendChild(listItem);
            }
        }
    };
}