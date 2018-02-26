const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//判断当前运行环境是开发环境还是生产环境
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === "production";

console.log("当前运行环境：",isProduction?"production":"development");
module.exports = {

    context:path.resolve(__dirname,'src'),
    entry:{
        vendor:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'build'),
        publicPath:'./',
        filename:'js/[name].js',
        chunkFilename:'js/[name].js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.DefinePlugin({
            // 定义全局变量
            'process.env': {
                'NODE_ENV': JSON.stringify(nodeEnv)
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: '../index.html',
            hash: true,
            chunks: ['vendor', 'app'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ],
    resolve:{
        extensions:['.js','.jsx','.less','.scss','.css'],
        modules:[
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            'actions': path.resolve(__dirname, 'src/actions'),
            'components': path.resolve(__dirname, 'src/components'),
            'containers': path.resolve(__dirname, 'src/containers'),
            'reducers': path.resolve(__dirname, 'src/reducers'),
            'utils': path.resolve(__dirname, 'src/utils')
        }
    },
    module:{

        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:'babel-loader'
            },
            {
                test:/\.html$/,
                use: 'html-loader?attrs=img:src img:data-src'
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
            }
        ]
    }
}