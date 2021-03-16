import { chunk } from 'lodash'

export function sum(a,b){
    return a + b
}

export function test(){
    chunk([1,2,3],2)
    //此时依赖会导入chunk相关的lodash代码，
    //因为webpack没有对其内部进行分析
}