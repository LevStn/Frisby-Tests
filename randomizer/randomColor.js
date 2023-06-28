module.exports = { getRandomColor };

function getRandomColor() {
  return Math.random().toString(16).slice(2, 8).toUpperCase();
}
