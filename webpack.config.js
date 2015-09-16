var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var PATHS = {
    app: __dirname + '/app'
};

var config = {
    context: PATHS.app,
    entry: {
        bundle: [PATHS.app + '/js/index.js']
    },
    output: {
        path: PATHS.app,
        filename: '/js/bundle.min.js'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=100000'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }, {
            test: /\.(js|jsx)$/,
            loaders: ['react-hot', 'babel'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: require.resolve('react'),
            loader: 'expose?React'
        }, {
            test: /\.html/,
            loader: 'raw'
        }, {
            test: /\.json/,
            loader: 'json'
        }, {
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new BrowserSyncPlugin({
            proxy: 'localhost:8080'
        }, {
            name: 'bs-instance',
            callback: function() {
                console.log('browserSync started!');
            },
            reload: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;