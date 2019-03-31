const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const config = require('config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

const APP_DIR = path.resolve(__dirname, '../src/index.js');
const OUT_DIR = {
    path: path.resolve(__dirname, '../public/build'),
    publicPath: '/public/build',
    filename: 'js/[name].[hash].js'};

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR],
            output: OUT_DIR,
            mode: NODE_ENV,
            devtool: NODE_ENV === 'production' ? false : 'eval-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.css$/,
                        use: [
                            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },
                    { test: /\.(png|jpg|gif)($|\?.+)/, loader: 'url-loader?limit=10&name=/img/[name].[ext]' },
                    { test: /\.svg($|\?.+)/, loader: 'url-loader?limit=10&mimetype=image/svg+xml&name=/img/[name].[ext]' },
                    { test: /\.woff($|\?.+)/, loader: 'url-loader?limit=10&mimetype=application/font-woff&name=/img/[name].[ext]' },
                    { test: /\.woff2($|\?.+)/, loader: 'url-loader?limit=10&mimetype=application/font-woff2&name=/img/[name].[ext]' },
                    { test: /\.[ot]tf($|\?.+)/, loader: 'url-loader?limit=10&mimetype=application/octet-stream&name=/img/[name].[ext]' },
                    { test: /\.eot($|\?.+)/, loader: 'url-loader?limit=10&mimetype=application/vnd.ms-fontobject&name=/img/[name].[ext]' },
                    { test: /\.json/, loader: 'json-loader', type: 'javascript/auto' }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new webpack.DefinePlugin({
                    'CONFIG': config.get('client'),
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
                new CopyWebpackPlugin([ { from: 'src/static' } ])
            ],
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                port: 2000
            }
        }
    ])
};
