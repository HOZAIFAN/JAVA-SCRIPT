// changing heading and background colour  by queary selectors

html starts here....

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom practise</title>
    <link rel="stylesheet" href="indexcss.css">
</head>
<body>
    <h1 id="heading">THIS IS HEADING</h1>
    
</body>
<script src="indexjavascript.js"></script>
</html>






javacript strats here....

text = document.querySelector("#heading");
text.style.backgroundColor = "red"; // backgroundColor
text.innerText = "HELLO WORLD"; // Corrected the text content
console.dir(text);

