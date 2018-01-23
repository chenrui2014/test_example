const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'production'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }

}