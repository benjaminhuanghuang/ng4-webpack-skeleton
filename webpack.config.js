const path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins:[
         new htmlWebpackPlugin({
            template:'./src/index.html'
         })
    ]
};