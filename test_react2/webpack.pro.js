const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const argv = require('yargs').argv;

let plugins = [
    new ExtractTextPlugin({
        filename: 'styles/[name].css'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new UglifyjsPlugin()
]

if (!!argv.json) {
    plugins.push(
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    )
}

module.exports = merge(common,{
    devtool: 'source-map',
    entry: {
        app: ['./entry']
    },
    plugins,
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        }]
    }
})