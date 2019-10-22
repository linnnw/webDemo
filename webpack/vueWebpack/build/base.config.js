//通用的config配置
//webpack的配置
const path = require('path');
// const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');   /*导入html-webpack-plugin*/
// const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')    /*压缩生成的js*/
module.exports = {
    entry: './src/main.js', /*要打包的文件*/
    output: {
        path: path.resolve(__dirname,'../dist'),       /*绝对路径*/
        filename: 'bundle.js',   /*生成的文件名*/
        // publicPath: 'dist/'  /*url路径前面加上dist*/
    },
    module: {       /*要使用scc就要配置这个*/
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]       /*use从右到左执行*/
            },
            {
                test: /\.less$/,        /*配置less*/
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,       /*使用图片需要的配置 还需要安装file-loader*/
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,     /*8192是8k如果使用的图片小于8k会生成base6字符串形式大于8k会生成一个哈希值的图片*/
                            name: 'img/[name].[hash:8].[ext]'   /*设置生成图片的路径和名字[name]表示返回原图片的名字[hash:8]表示去生成哈希值的前8位[ext]表示后缀名和原来图片一致*/
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, /*不转换node_modules和bower_components里的es6*/
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve:{       /*vue要想使用组件就要配置这个*/
        alias:{     /*这个是设置别名表示import Vue from 'vue';变为import Vue from 'vue/dist/vue.esm.js';*/
            vue$: 'vue/dist/vue.esm.js'     /*要导入vue.esm.js才能使用组件*/
        }
    },
    plugins: [
        // new webpack.BannerPlugin('版权归。。。所有') ,   /*bundle头部写上版权*/
        new htmlWebpackPlugin({     /*使用htmlWebpackPlugin用来在dist生成html文件*/
            template: 'index.html'      /*根据index.html文件的内容来生成dist的html文件*/
        })
    ]
}