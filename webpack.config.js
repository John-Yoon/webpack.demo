var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        /* output folder build >> dist
        *  filename output >> main
        * */
        path: path.resolve(__dirname, 'dist'), /*__dirname << 현재 실행 되는 디렉토리*/
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    'eslint-loader'
                ]
            },
            /*{
                test: /\.css$/i, /!* .css 확장자 파일이면 ? *!/
                /!*use: ['style-loader', 'css-loader'],*!/ /!* css-loader를 실행하고, style-loader를 실행해라.. 역순으로 실행 됨..*!/
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },*/
            {
                test: /\.(sc|sa|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};