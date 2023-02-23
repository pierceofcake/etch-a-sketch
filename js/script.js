const sketchContainer = document.querySelector(".sketch-container");
const gridSizeButton = document.querySelector(".grid-size-button");
const pixels = 16;

// Draw initial grid
drawGrid(pixels);

gridSizeButton?.addEventListener("click", () => {
  drawGrid(getSize());
});

// Helper functions

function drawGrid(pixelAmt) {
  const gridWrapper = document.createElement("div");
  gridWrapper.classList.add("grid-wrapper");

  for (let i = 0; i < pixelAmt; i++) {
    const row = document.createElement("div");
    row.classList.add("pixel-row");

    for (let j = 0; j < pixelAmt; j++) {
      const widthHeight = 700 / pixelAmt;
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.height = `${widthHeight}px`;
      pixel.style.width = `${widthHeight}px`;

      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = getColor();
      });
      row.appendChild(pixel);
    }

    gridWrapper?.appendChild(row);
  }
  sketchContainer?.appendChild(gridWrapper);
}

function getSize() {
  let size = Number(
    prompt(
      'How large do you want the grid to be in pixels? (E.g., entering "50" will create a 50x50 pixel grid.'
    )
  );

  while (size > 100 || size < 10) {
    size = Number(prompt("Please pick a number between 10 and 100."));
  }
  const gridWrapper = document.querySelector(".grid-wrapper");
  gridWrapper?.remove();
  return size;
}

function getColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
