//Declaring Variables / Classes
const largeImage = document.querySelector('.large-image');
const smallImage1 = document.querySelector('.small-image1');
const smallImage2 = document.querySelector('.small-image2');
const smallImage3 = document.querySelector('.small-image3');
const smallImage4 = document.querySelector('.small-image4');
const smallImage5 = document.querySelector('.small-image5');

//Creating the switching photographs function
function replace(e) {
    console.log(this);

    e.target.src = 'images/flowers-pink-large.jpg';
    e.target.src = 'images/flowers-pink-small.jpg';  
    e.target.src = 'images/flowers-purple-small.jpg';  
    e.target.src = 'images/flowers-red-small.jpg';  
    e.target.src = 'images/flowers-white-small.jpg';  
    e.target.src = 'images/flowers-yellow-small.jpg';    
    console.log(e.target.src)



};


//Making the onclick event handler

smallImage1.addEventListener('click', replace, smallImage2);
smallImage2.addEventListener('click', replace, smallImage3);
smallImage3.addEventListener('click', replace, smallImage4);
smallImage4.addEventListener('click', replace, smallImage5);
smallImage5.addEventListener('click', replace, smallImage1);


























//MY ATTEMPTS TO DO THE FUNCTION
//img.setAttribute('src', 'C:\Users\Woodman101\Desktop\Assignment #2 - Josie Woodman\assignment-2-comp1073\assignment-2-template\images')

//Question to self: Do I have to make ids for the larger image files of the small-image# ?
/*
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
*/