class A{
    a = 1;
    constructor(){
        
    }
}

const obj = {
    foo:{
        bar:{
            baz:42
        }
    }
}

const baz = obj?.foo?.bar?.baz 
console.log(baz);
// 如果其中一个为undefined，则直接返回

console.time();