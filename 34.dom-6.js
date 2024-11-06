this will pop a message when click on backgrounk and turn background to black and also added a class
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

    <button id="dark-mode"> Dark mode on</button>

    <script src="indexjavascript.js"></script> 
</body>
</html>


css starts here......

.button-seeting {
    border-radius: 10px;
    box-shadow: 8px 8px  10px yellow; 
    text-align: center;
    color: antiquewhite;
    background-color: blueviolet;
}


javascript tars here......

document.querySelector("button").addEventListener("click", function () {
    alert("Are you sure to enable dark mode?");
    document.body.style.backgroundColor = "black";
      // Add class to the button
    document.querySelector("button").classList.add("button-seeting");
});
