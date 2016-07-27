var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

var extractCSS = new ExtractTextPlugin('public/css/styles.css');
module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                include: [
                    helpers.root('src', 'scss')
                ],
                loader: extractCSS.extract(['raw-loader', 'sass-loader'])
            },
            {
                test: /\.scss$/,
                include: [
                    helpers.root('src', 'app')
                ],
                loader: 'raw-loader!sass-loader'
            }
        ]
    },

    plugins: [
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new CopyWebpackPlugin([
            {
                from: 'api/**/*'
            },
            {
                from: 'public/**/*'
            }])
    ]
};
