var whiteButton = document.querySelector(".whiteButton");
    var mainImage = document.getElementById("mainImage");
    var colorText = document.getElementById("colorText");
    var buttonText = document.getElementById("buttonText");
    var GreyButton = document.querySelector(".GreyButton");
    var images = [
        { src: "./img/depositphotos_549999076-stock-photo-aluminum-laptop-mobile-phone-headphones.jpg", color: "White", buttonText: "White" },
        { src: "./img/photo-1611186871348-b1ce696e52c9.jpeg", color: "Grey",
        buttonText: "Grey", },
        { src: "./img/519rxgXrFXL.jpg", color: "Blue", buttonText: "Blue" },
        { src: "./img/photo-1494698853255-d0fa521abc6c.jpeg", color: "Black",
         buttonText: "Black" }
        
    ];
  
    var imageElements = document.querySelectorAll(".my-image");

imageElements.forEach(function(imageElement, index) {
    imageElement.src = images[index].src;
    imageElement.style.borderRadius = "20px";
});

    var currentImageIndex = 0;
    
    whiteButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex].src;
        colorText.textContent = images[currentImageIndex].color;
        buttonText.textContent = images[currentImageIndex].buttonText;


    });

 

GreyButton.addEventListener("click", function() {
    mainImage.src = images[1].src;  
    colorText.textContent = "Space " + images[1].color;
});

var buttons = document.querySelectorAll(".buttons button");
var priceDisplay = document.querySelector(".price-display");
var defaultPrice = parseInt(priceDisplay.getAttribute("data-value"));

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonPrice = parseInt(button.getAttribute("data-value"));
        var currentPrice = parseInt(priceDisplay.getAttribute("data-value")) || defaultPrice;
        var newPrice = currentPrice + buttonPrice;
        priceDisplay.setAttribute("data-value", newPrice);
        priceDisplay.textContent = newPrice.toLocaleString();
    });
});