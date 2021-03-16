const colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

export default function getRandomColor(max,min){
    return colors[Math.ceil(Math.random()*(max-min) + min)]
}

export function getRandom(max,min){
    return Math.ceil(Math.random()*(max-min) + min)
}