var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer:{
        static:'./dist'
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template:'assets/model.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};



