const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.style.position = "absolute";

  cube.addEventListener("mousedown", (e) => {
    selectedCube = cube;

    const rect = cube.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });
});

document.addEventListener("mousemove", (e) => {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundary conditions
  const maxX = container.clientWidth - selectedCube.offsetWidth;
  const maxY = container.clientHeight - selectedCube.offsetHeight;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  selectedCube.style.left = x + "px";
  selectedCube.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
  selectedCube = null;
});