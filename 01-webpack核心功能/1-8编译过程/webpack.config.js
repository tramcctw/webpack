module.exports = {
    mode:'production',
    entry:'./src/main.js',
    watch:true,
    output:{
        filename:'bundle.js'
    },
    devtool:'source-map'
}