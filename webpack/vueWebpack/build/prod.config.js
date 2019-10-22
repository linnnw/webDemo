//发布时的config配置

const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')    /*压缩生成的js*/
const webpackMerge = require('webpack-merge');      /*合并配置文件用的插件*/
const baseConfig = require('./base.config.js')

module.exports = webpackMerge(baseConfig,{

    plugins: [

        new uglifyjsWebpackPlugin()     /*压缩生成的js*/
    ]
})