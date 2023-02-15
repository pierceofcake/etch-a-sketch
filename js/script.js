const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    sketchContainer?.appendChild(pixel);
  }
}

document.documentElement;

// Helper functions

function getColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
