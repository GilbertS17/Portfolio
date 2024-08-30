function isElementInViewport(element, threshold = 0.5) {
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const elementInView = Math.max(
    0,
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
  );

  return elementInView / elementHeight >= threshold;
}

function toggleImageVisibility(imageId, textId) {
  const imageContainer = document.querySelector(`#${imageId}`);
  const aboutText = document.querySelector(`#${textId}`);

  if (isElementInViewport(aboutText, 0.2)) {
    imageContainer.style.opacity = 1;
    imageContainer.style.transform = "translateY(0)";
  } else {
    imageContainer.style.opacity = 0;
    imageContainer.style.transform = "translateY(30px)";
  }
}

window.addEventListener("scroll", function () {
  toggleImageVisibility("image1", "text1");
  toggleImageVisibility("image2", "text2");
  toggleImageVisibility("image3", "text3");
  toggleImageVisibility("image5", "text3");
  toggleImageVisibility("image4", "text1");
});

// Initial check
toggleImageVisibility("image1", "text1");
toggleImageVisibility("image2", "text2");
toggleImageVisibility("image3", "text3");
toggleImageVisibility("image5", "text3");
toggleImageVisibility("image4", "text1");

// Function to show or hide the button
function toggleBackToTopButton() {
  const button = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    // Adjust the value to control when the button appears
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll event listener
window.addEventListener("scroll", toggleBackToTopButton);

// Click event listener to scroll back to the top
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
