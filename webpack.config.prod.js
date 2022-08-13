const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base')

module.exports = {
    // 继承base所有内容
    ...base,

    mode: 'production',

    plugins: [
        // 继承base中plugins所有内容
        ...base.plugins,
        new MiniCssExtractPlugin({
            // name可以自行指定，指定格式为 index.css，不指定则默认为main
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};



