const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('dns')
const { Template } = require('webpack')


module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    resolve:{
        extensions:['.js'],
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/node_module/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
     plugins: [ // Corregido: Ahora es un arreglo []
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html', // Corregido a minúscula
            filename: './index.html',
        })
    ]
}