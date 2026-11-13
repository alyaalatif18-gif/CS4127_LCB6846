
// 1. DARK & LIGHT MODE

const themeButton = document.createElement("button");

themeButton.textContent = "Dark Mode";

themeButton.className = "theme-btn";

document.body.insertBefore(themeButton, document.querySelector("main"));

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "Light Mode";

}

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");

    }

});


// 2. IMAGE ENLARGEMENT / ZOOM

const images = document.querySelectorAll("main img");

const imageBox = document.createElement("div");

imageBox.className = "image-box";

const enlargedImage = document.createElement("img");

enlargedImage.className = "enlarged-image";

const closeButton = document.createElement("button");

closeButton.textContent = "x";

closeButton.className = "close-btn";

imageBox.appendChild(closeButton);

imageBox.appendChild(enlargedImage);

document.body.appendChild(imageBox);

images.forEach(function(image){

    image.addEventListener("click", function(){

        enlargedImage.src = image.src;

        imageBox.classList.add("show");

    });

});

closeButton.addEventListener("click", function(){

    imageBox.classList.remove("show");

});

imageBox.addEventListener("click", function(event){

    if(event.target === imageBox){

        imageBox.classList.remove("show");

    }

});


// 3. BACK-TO-TOP BUTTON

const topButton = document.createElement("button");

topButton.textContent = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", function(){

    if (window.scrollY > 200){

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
