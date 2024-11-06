html starts here.......

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background</title>
</head>
<body>
    <button id="colorButton">Click Me</button>

    <script src="indexjavascript.js"></script> 
</body>
</html>



javascipt starts here....

// Select the button with id 'colorButton'
const button = document.querySelector("#colorButton");

// Change background to red when mouse button is pressed
button.addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'red';
});
