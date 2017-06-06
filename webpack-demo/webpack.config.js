const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'js/[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            // 一般写成地址形式速度会快，也可以写成正则或者path.resolve(__dirname,'src')
            exclude: '/node_modules/',
            include: '/app/',
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
                // exclude: '/node_modules/',
                // include: '/app/',
                // use: [{
                //         loader: 'style-loader',
                //         options: { sourceMap: true }
                //     },
                //     {
                //         loader: 'css-loader',
                //         options: { sourceMap: true }
                //     },
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             plugins: (loader) => [
                //                 require('postcss-import')({ root: loader.resourcePath }),
                //                 require('cssnext')(),
                //                 require('autoprefixer')({
                //                     browsers: ['last 5 versions']
                //                 }),
                //                 require('cssnano')()
                //             ]
                //         }
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options: { sourceMap: true }
                //     }

        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'this is a',
            data: new Date(),
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            minify: {
                trimCustomFragments: true,
                removeTagWhitespace: false,
                removeComments: true,
                // collapseInlineTagWhitespace: true,
                // collapseWhitespace: true
            }
        })
    ]
};