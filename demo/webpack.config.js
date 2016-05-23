'use strict';

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const ENV = process.env.NODE_ENV || 'local';
let entry, buildPath, fileName;

entry = ['./src/app.js'];
buildPath = path.join('dist');
fileName = 'index.js';

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, buildPath),
        filename: fileName
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint'  
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader')
        }, {
            test: /\.js$/,
            exclude: /(node_modules|src\/js\/libs\/)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        // Define import(require) file types
        extensions: ['', '.js', '.json', '.vue']
    },
    cache: true
};
