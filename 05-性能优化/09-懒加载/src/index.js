const btn = document.getElementsByTagName('button')[0]

btn.onclick = async function(){
    const { chunk } = await import('./utils')
    const { isEmpty } = await import('./test')
    console.log(isEmpty);
    //异步请求，
    //类似于jsonp
    //将这种请求的依赖单独打包成一个chunk
    //每一个动态引入的都会单独打包成一个chunk
    //使用jsonp的方式去读取远程的js模块
    //es6的草案
    console.log(chunk([1,2,3,4],2));
}