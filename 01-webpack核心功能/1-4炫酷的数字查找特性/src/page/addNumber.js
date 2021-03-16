import getRandomColor,{getRandom} from '../utils/getRandom'
import isPrime from '../utils/isPrime'
let count = 1;
let timer
const divContainer = document.getElementById('divContainer');
const body = document.getElementsByTagName('body')[0]
const divCenter = document.getElementById('divCenter')
let key = false
let color
document.addEventListener('click',function(){
    if(key){
     clearInterval(timer)
     key = false
     return;   
    }
    key = true
    timer = setInterval(() => {
        const span = document.createElement('span')
        const div = document.createElement('div');
        div.className = 'center'
        div.innerText = count
        span.innerText = count
        divCenter.innerText = count
        if(isPrime(count)){
            color = getRandomColor(5,0)
            span.style.color = color  
        }
        divContainer.appendChild(span)
        body.appendChild(div)
        getComputedStyle(div).left;
        div.style.color = color 
        const x = getRandom(-200,200)
        const y = getRandom(-200,200)
        div.style.transform = `translate(${x}px,${y}px)`,
        div.style.opacity = '0'
        count ++;
    }, 100);
})