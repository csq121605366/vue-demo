const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin=require('html-webpack-plugin');


module.exports = {
    entry: {
        a:'./app/a.js',
        index:'./app/index.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [new htmlWebpackPlugin({
        title:'hello webpack',
        data:new Date(),
        filename:'index.html',
        template:'index.html',
        minify:{
            trimCustomFragments:true,
            removeTagWhitespace:false,
            removeComments:true,
            collapseInlineTagWhitespace:true,
            collapseWhitespace:true
        }
    })],
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'http://cdn.com/'
    }
};