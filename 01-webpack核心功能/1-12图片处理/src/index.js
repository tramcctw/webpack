const src = require('./images/1.jpg')
const img = document.createElement('img')
console.log(src);
img.src = src
document.body.appendChild(img)