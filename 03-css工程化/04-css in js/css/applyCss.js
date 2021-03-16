export default function(dom,...styles){
    let resStyle = {}
    for(let val of styles){
        resStyle = {
            ...resStyle,
            ...val
        }
    }
    for(let prop in resStyle){
        dom.style[prop] = resStyle[prop]
    }
}