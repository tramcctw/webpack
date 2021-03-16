const baseConfig = require('./webpack.base.config')
module.exports = {
    ...baseConfig,
    mode:'development',
    devServer:{
        port:3000,
        open:true,
        index:'list.html',
        proxy:{
            '/api':{
                target:'http://yuanjin.tech:5100/',
                changeOrigin:true
            }
        }
    }
}