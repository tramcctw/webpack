const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
const baseConfig = require('./webpack.base.config')
module.exports = env=>{
    if(env && env.prod){
        const config = {
            ...baseConfig,
            ...prodConfig
        }
        const plugins = [...baseConfig.plugins,...prodConfig.plugins]
        config.plugins = plugins
        return config
    }else{
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}