const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
});

module.exports = {
    entry: "./build/src/app.js",
    devtool: 'source-map',
    output: {
        path: './assets/js',
        publicPath: "/assets/js",
        filename: "app_bundle.js"
    },
    resolveLoader: { root: path.join(__dirname, "node_modules") },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [definePlugin]
};
