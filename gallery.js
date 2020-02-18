//Declaring Variables / Classes
const largeImage = document.querySelector('.large-image');
const smallImage1 = document.querySelector('.small-image1');
const smallImage2 = document.querySelector('.small-image2');
const smallImage3 = document.querySelector('.small-image3');
const smallImage4 = document.querySelector('.small-image4');
const smallImage5 = document.querySelector('.small-image5');

//Making the onclick event handler

//MY ATTEMPTS TO DO THE FUNCTION
//img.setAttribute('src', 'C:\Users\Woodman101\Desktop\Assignment #2 - Josie Woodman\assignment-2-comp1073\assignment-2-template\images')

//Question to self: Do I have to make ids for the larger image files of the small-image# ?
largeImage.onclick = function(change) {

    if (change.getElementById('large-image').src == "C:\Users\Woodman101\Desktop\Assignment #2 - Josie Woodman\assignment-2-comp1073\assignment-2-template\images\flowers-pink-large.jpg") {
        document.getElementById('small-image1').src = "images/flowers-purple-large.jpg";
    }
    else {
        document.getElementById('large-image'). src = "images/flowers-pink-large.jpg";
    }
    
    if (document.getElementById("large-image").src == "images/flowers-purple-large.jpg") {
        document.getElementById("small-image2").src == "images/flowers-red-large.jpg"
    }
    else {
        document.getElementById("large-image").src == "images/flowers-purple-large.jpg"
    }

    if (document.getElementById("large-image").src == "images/flowers-red-large.jpg") {
        document.getElementById("small-image3").src == "images/flowers-white-large.jpg"
    }
    else {
        document.getElementById("large-image").src == "images/flowers-red-large.jpg"
    }

    if (document.getElementById("large-image").src == "images/flowers-white-large.jpg") {
        document.getElementById("small-image4").src == "images/flowers-yellow-large.jpg"
    }
    else {
        document.getElementById("large-image").src == "images/flowers-white-large.jpg"
    }

}
