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
    <img id="image"  class="imagesetting" src="STEVE.jpg" alt="">

    <script src="indexjavascript.js"></script> 
</body>
</html>



css starts hre.........


#imagesetting{
    width: 100vw;
    height: 100%;

    
}


javascript starts here......



// adding a class to image also changing an existing image sourse

// Select the image element by ID
let img = document.getElementById("image");

// Change the source of the image
img.setAttribute('src', 'bill.jpg'); 

// Add a class to the image
img.idList.add('imagesetting');