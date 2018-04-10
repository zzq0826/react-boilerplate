const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');


const proConfig = {
    mode: "production",
    // context: path.join(__dirname, 'src'),
    output: {
        publicPath: "",
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        // new ExtractTextPlugin({
        //     filename: '[name].[hash].css',
        //     allChunks: true
        // })
    ]
};

module.exports = merge(baseConfig, proConfig);