const container = document.querySelector('.container');
const cubes = document.querySelectorAll('.cube');

let currentCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    currentCube = cube;

    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.position = 'absolute';
    cube.style.zIndex = '1000';
  });
});

document.addEventListener('mousemove', (e) => {
  if (!currentCube) return;

  const containerRect = container.getBoundingClientRect();

  let left = e.clientX - containerRect.left - offsetX;
  let top = e.clientY - containerRect.top - offsetY;

  left = Math.max(
    0,
    Math.min(left, container.clientWidth - currentCube.offsetWidth)
  );

  top = Math.max(
    0,
    Math.min(top, container.clientHeight - currentCube.offsetHeight)
  );

  currentCube.style.left = `${left}px`;
  currentCube.style.top = `${top}px`;
});

document.addEventListener('mouseup', () => {
  currentCube = null;
});