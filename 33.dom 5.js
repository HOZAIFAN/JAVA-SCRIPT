html starts here........

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background</title>
    <link rel="stylesheet" href="indexcss.css">
</head>
<body>
    <ul id="ul">

    </ul>
  <P id="hello"> hello i am japi</P>

    <script src="indexjavascript.js"></script> 
</body>
</html>


javascript tars here......

// Create a new <li> element
let newItem = document.createElement("li");
newItem.textContent = 'Hello World';
// Directly append the new <li> to the existing <ul> with the ID 'ul'
document.getElementById('ul').appendChild(newItem);
// Log the new <li> element in the console
console.dir(newItem);