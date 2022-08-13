const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base')

module.exports = {
    // 继承base所有内容
    ...base,
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        port: 107
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};



