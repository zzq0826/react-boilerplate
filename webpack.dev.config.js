const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');


const devConfig = {
    mode: "development",
    // context: path.join(__dirname, 'src'),
    output: {
        publicPath: "",
        chunkFilename: "[name].js",
        filename: "[name].js"
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: '0.0.0.0',
        port: 2310,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
};

module.exports = merge(baseConfig, devConfig);