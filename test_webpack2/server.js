const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler,{publicPath:config.output.publicPath}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});