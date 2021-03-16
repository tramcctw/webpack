const img = require('./images/1.jpg').default
console.log(img);
const image = document.createElement('img')
image.src = img
document.body.appendChild(image)