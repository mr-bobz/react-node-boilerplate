const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: [
        './app/client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
        })
    ],
    module: {
        loaders: [{
        test: /.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/public/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ],
};
