//开发时的config配置
const webpackMerge = require('webpack-merge');      /*合并配置文件用的插件*/

const baseConfig = require('./base.config.js');
module.exports = webpackMerge(baseConfig , {

    devServer: {       /*自动部署代码到内存  webpack-dev-server*/
        contentBase: './dist',      /*自动部署代码到dist文件夹*/
        inline: true
    }
})