# 区分配置
开发环境和生产环境需要使用不同的配置
1. 使用两个配置文件
    开发和生产时，指定相应的配置文件
2. 可以在配置文件中指定一个函数
```js
module.exports = env=>{
    return {
        //相应的配置
    }
}
```
env是由命令传入的
例如 npx webpack --env abc // env 为abc
npx webpack --env.abc // env {abc:true}
npx webpack --env.abc=1 --nev.bcd=2 // env {abc:1,bcd:2}