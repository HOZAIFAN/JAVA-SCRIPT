
this code will change image to another and will bw switched constantly when clicked on image


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
    <img src="bill.jpg" alt="">

    <script src="indexjavascript.js"></script> 
</body>
</html>





javascript tars here......

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "bill.jpg") {
    myImage.setAttribute("src", "STEVE.jpg");
  } else {
    myImage.setAttribute("src", "bill.jpg");
  }
};