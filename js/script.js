const sketchContainer = document.querySelector(".sketch-container");
const gridSizeButton = document.querySelector(".grid-size-button");
const pixels = 16;

drawGrid(pixels);

gridSizeButton?.addEventListener("click", drawGrid);

// Helper functions

function drawGrid(pixelAmt) {
  for (let i = 0; i < pixelAmt; i++) {
    const row = document.createElement("div");
    row.classList.add("pixel-row");

    for (let j = 0; j < pixelAmt; j++) {
      const widthHeight = 900 / pixels;
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.height = `${widthHeight}px`;
      pixel.style.width = `${widthHeight}px`;

      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = getColor();
      });
      row.appendChild(pixel);
    }

    sketchContainer?.appendChild(row);
  }
}

function getSize() {
  const size = prompt(
    'How large do you want the grid to be in pixels? (E.g., entering "50" will create a 50x50 pixel grid.'
  );
  return Number(size);
}

function getColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
