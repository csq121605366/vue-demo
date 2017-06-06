const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: './app/script/main.js',
        a: './app/script/a.js',
        b: './app/script/b.js',
        c: './app/script/c.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'this is a',
            data: new Date(),
            filename: 'a.html',
            template: 'index.ejs',
            excludeChunks: ['b', 'c'],
            inject: false,
            minify: {
                trimCustomFragments: true,
                removeTagWhitespace: false,
                removeComments: true,
                // collapseInlineTagWhitespace: true,
                // collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            title: 'this is b',
            data: new Date(),
            filename: 'b.html',
            template: 'index.ejs',
            excludeChunks: ['a', 'c'],
            inject: false,
            minify: {
                trimCustomFragments: true,
                removeTagWhitespace: false,
                removeComments: true,
                // collapseInlineTagWhitespace: true,
                // collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            title: 'this is c',
            data: new Date(),
            filename: 'c.html',
            template: 'index.ejs',
            excludeChunks: ['a', 'b'],
            inject: false,
            minify: {
                trimCustomFragments: true,
                removeTagWhitespace: false,
                removeComments: true,
                // collapseInlineTagWhitespace: true,
                // collapseWhitespace: true
            }
        })

    ],
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://cdn.com/'
    }
};