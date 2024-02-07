const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const maxWidth = window.innerWidth - noButton.offsetWidth;
const maxHeight = window.innerHeight - noButton.offsetHeight;
const imagesNo = [
  "please0.gif",
  "please1.gif",
  "please2.gif",
  "please3.gif",
  "please4.gif",
  "please5.gif",
];
const imagesYes = [
  "image0.png",
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
];
const messages = {
  No: ["Pleaseeeeeeeeeeee ", "I'll be so sad if you don't", "Come ooooon"],
  Yes: ["Yehey it will be a fun 14th ", "I'm so exciteeeeeeed!"],
};
let currentImageIndex = 0;
function cycleImages(response) {
  const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
  const image = document.createElement("img");
  image.className = "image";
  if (response == "No") {
    currentImageIndex = Math.floor(Math.random() * imagesNo.length);
    image.src = `images/${imagesNo[currentImageIndex]}`;
  } else {
    currentImageIndex = Math.floor(Math.random() * imagesYes.length);
    image.src = `images/${imagesYes[currentImageIndex]}`;
  }
  image.style.position = "absolute";
  image.style.left = `${randomX}px`; // Random X position
  image.style.top = `${randomY}px`; // Random Y position

  imageContainer.appendChild(image);
}

function removeUnwantedImages() {
  const imageElements = imageContainer.querySelectorAll('img');

  imageElements.forEach(element => {
    if ((!element.classList.contains('main1')) && (!element.classList.contains('main0'))) {
      element.remove();
    }
  });
}

function showMessage(response) {
  const messageArray = messages[response];
  const randomMessageIndex = Math.floor(Math.random() * messageArray.length);
  const randomMessage = messageArray[randomMessageIndex];
  if (response === "No") {
    cycleImages(response);
    document.getElementById("question").textContent = randomMessage;
    document.getElementById("name").style.display = "none";
  } else if (response === "Yes") {
    removeUnwantedImages();
    document.getElementById("question").textContent = randomMessage;
    document.getElementById("name").remove();
    noButton.remove();
    yesButton.remove();
    document.getElementsByClassName("main0")[0].src = "images/catdance1.gif";
    document.getElementsByClassName("main1")[0].src = "images/catdance.gif";

    setInterval(() => {
      cycleImages(response);
    }, 1000);
  }
}
