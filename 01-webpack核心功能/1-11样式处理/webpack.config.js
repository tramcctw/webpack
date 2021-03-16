module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/index\.css$/,   
                use:['./loaders/style-loader.js']   
            },
        ] 
    }
} 