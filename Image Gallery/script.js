let fullimgbox = document.getElementById("fullimgbox");
let fullimg = document.getElementById("fullimg");
let currentIndex = 0;

// List of images in the gallery (their sources)
const images = [
  "Images/A1.jpg",
  "Images/A2.jpg",
  "Images/A3.jpg",
  "Images/A4.jpg",
  "Images/A5.jpg",
  "Images/A6.jpg",
  "Images/A7.jpg",
  "Images/A8.jpg",
  "Images/A9.jpg",
  "Images/A10.jpg",
  "Images/A11.jpg",
  "Images/A12.jpg",
  "Images/A13.jpg",
  "Images/A14.jpg",
  "Images/A7.jpg",
  "Images/A4.jpg",
];

// Function to open the full image and set the index
function openfullImg(index) {
  currentIndex = index; // Set the current index to the clicked image
  fullimg.src = images[currentIndex]; // Show the clicked image
  fullimgbox.style.display = "flex"; // Show the image box
}

// Function to close the full image
function closefullImg() {
  fullimgbox.style.display = "none"; // Hide the image box
}

// Function to change images in the carousel
function changeImage(direction) {
  currentIndex += direction; // Move to the next or previous image

  // Wrap around if the currentIndex exceeds the bounds
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Update the full image to the new index
  fullimg.src = images[currentIndex];
}
