const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        port: 107
    },
    entry: './src/index.js',
    output: {
        // name可以自行指定，指定格式为 index.[hash].js，不指定则默认为main
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'assets/model.html'
        }),
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



