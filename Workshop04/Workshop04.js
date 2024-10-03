//Exercise 1
        // Button 1: Change the heading "Workshop 4" to "Modified Heading!"
        document.getElementById("button1").onclick = function() {
            document.getElementById("workshopHeading").innerHTML = "Modified Heading!";
        };

        // Button 2: Modify style of the "Exercise 2" heading
        document.getElementById("button2").onclick = function() {
            var exerciseHeading = document.getElementById("exerciseHeading");
            exerciseHeading.style.fontSize = "30px";
            exerciseHeading.style.fontStyle = "italic";
            exerciseHeading.style.color = "blue";
            exerciseHeading.style.backgroundColor = "yellow";
        };

        // Button 3: Append a new paragraph and change the background of the page
        document.getElementById("button3").onclick = function() {
            // Create new paragraph
            var newParagraph = document.createElement("p");
            newParagraph.innerHTML = "<em>Lorem ipsum* dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. *</em>";

            // Append paragraph after the 4th paragraph
            var fourthParagraph = document.getElementsByTagName("p")[3];
            fourthParagraph.parentNode.insertBefore(newParagraph, fourthParagraph.nextSibling);

            // Add logo image after the paragraph
            var logoImage = document.createElement("img");
            logoImage.src = "Workshop04_image/playstation_logo.png"; // logo image
            newParagraph.appendChild(logoImage);

            // Change the background of the entire page
            document.body.style.backgroundColor = "#f0f0f0";
        };



        //Exercise 2
        // Hide checkbox event: Hides the element with id "me"
        document.getElementById("hideCheckbox").onchange = function() {
            var element = document.getElementById("me");
            if (this.checked) {
                element.style.display = "none";
            }
        };

        // Show checkbox event: Shows the element with id "me"
        document.getElementById("showCheckbox").onchange = function() {
            var element = document.getElementById("me");
            if (this.checked) {
                element.style.display = "block";  // Return to default visibility
            }
        };

        // Surprise checkbox event: Changes the font size of elements with class "surprise"
        document.getElementById("surpriseCheckbox").onchange = function() {
            var surpriseElements = document.getElementsByClassName("surprise");
            if (this.checked) {
                for (var i = 0; i < surpriseElements.length; i++) {
                    surpriseElements[i].style.fontSize = "20px";  // Change font size to 20px
                }
            }
        };



        //Exercise 3
         // Function to alert the user's choice and change the car image
         function changeCar() {
            var carSelect = document.getElementById("carSelect");
            var carChoice = carSelect.value;
            alert("You selected: " + carChoice);

            // Change the image based on the user's selection
            var carImage = document.getElementById("carimage");

            if (carChoice === "audi") {
                carImage.src = "Workshop04_image/audi_auto.png"; // Replace with a real Audi image
            } else if (carChoice === "bmw") {
                carImage.src = "Workshop04_image/bmw_auto.png"; // Replace with a real BMW car
            } else if (carChoice === "mercedes") {
                carImage.src = "Workshop04_image/mercedes_auto.png"; // Replace with a real Mercedes image
            } else if (carChoice === "tesla") {
                carImage.src = "Workshop04_image/tesla_auto.png"; // Replace with a real Tesla image
            }
        }

        // Add mouseover and mouseout events to add/remove border
        var carImage = document.getElementById("carimage");

        carImage.onmouseover = function() {
            carImage.classList.add("hovered");
        };

        carImage.onmouseout = function() {
            carImage.classList.remove("hovered");
        };



        //Exercise 4
        // 1. Move the image 200px left and 500px down
        function move() {
            var carImage = document.getElementById("carimage");
            carImage.style.left = "500px";
            carImage.style.top = "400px";
        }

        // 2. Animate the image back and forth
        var pos = 0;
        var direction = 1;  // 1 for forward, -1 for backward
        var interval;

        function doMove() {
            var carImage = document.getElementById("carimage");
            clearInterval(interval);  // Stop any existing interval
            interval = setInterval(function() {
                pos += 5 * direction;  // Move by 5px
                carImage.style.left = pos + "px";
                
                if (pos >= window.innerWidth - 400 || pos <= 0) {
                    direction *= -1;  // Change direction at the edges of the screen
                }
            }, 20);  // Speed of movement
        }

        // 3. Fade out the image
        var opacity = 1;
        function fadeOut() {
            var carImage = document.getElementById("carimage");
            clearInterval(interval);  // Stop any existing interval
            interval = setInterval(function() {
                if (opacity <= 0) {
                    clearInterval(interval);  // Stop fading when opacity reaches 0
                } else {
                    opacity -= 0.01;  // Decrease opacity
                    carImage.style.opacity = opacity;
                }
            }, 20);  // Speed of fading
        }

        // 4. Remove the image from the page
        function disappear() {
            var carImage = document.getElementById("carimage");
            carImage.remove();  // Remove the image element from the DOM
        }



        //Exercise 5
        // Function to add a preset row to the table
        function addPresetRow() {
            var table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow();

            // Insert new cells for name, position, and salary
            var nameCell = newRow.insertCell(0);
            var positionCell = newRow.insertCell(1);
            var salaryCell = newRow.insertCell(2);

            // Add preset data
            nameCell.innerHTML = "Jane Doe";
            positionCell.innerHTML = "Project Manager";
            salaryCell.innerHTML = "$100,000";
        }

        // Function to add a custom row based on user input
        function addCustomRow() {
            var name = document.getElementById("name").value;
            var position = document.getElementById("position").value;
            var salary = document.getElementById("salary").value;

            if (name === "" || position === "" || salary === "") {
                alert("Please fill in all fields");
                return;
            }

            var table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow();

            // Insert new cells for name, position, and salary
            var nameCell = newRow.insertCell(0);
            var positionCell = newRow.insertCell(1);
            var salaryCell = newRow.insertCell(2);

            // Add data from user input
            nameCell.innerHTML = name;
            positionCell.innerHTML = position;
            salaryCell.innerHTML = salary;

            // Clear input fields after adding row
            document.getElementById("name").value = "";
            document.getElementById("position").value = "";
            document.getElementById("salary").value = "";
        }
        