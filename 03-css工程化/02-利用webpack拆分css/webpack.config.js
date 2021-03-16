
module.exports = {
    mode: "development",
    devtool: "source-map",
    watch:true,
    module:{
        rules:[
            {
                test:/\.jpg$/,
                use:'url-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
        ]
    }
}