const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const webpackServerConfig = require('./webpack/webpackServerConfig');

new WebpackDevServer(webpack(config),{
    contentBase: './',
    hot: true,
    compress: false,
    historyApiFallback: true,
    watchOptions: {
        ignored: /node_modules/
    },
    stats: {
        modules: false,
        chunks: false,
        colors: true
    },
    before(app) {
        app.use(errorOverlayMiddleware())
    }
}).listen(webpackServerConfig.port, webpackServerConfig.host, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(`Listening at http://${webpackServerConfig.host}:${webpackServerConfig.port}/`);
});