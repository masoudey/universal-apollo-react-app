const webpack = require('webpack');
const path = require('path');
const webConfig = require('./webConfig');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const clientConfig = {
    mode: webConfig.environment,
    entry: path.resolve(__dirname,'client/index.js'),

    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles.css",
          })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-2'],
                    plugins: [
                        'react-html-attrs',
                        // 'transform-decorators-legacy',
                        // 'transform-class-properties'
                        ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '/'
                        }
                      },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]'
                        }
                    }
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]'
                        }
                    }
                ]
              }
        ]
    },
    devtool: 'source-map',

}

const serverConfig = {
    mode: webConfig.environment,
    target: 'node',
    entry: path.resolve(__dirname,'server/index.js'),

    output: {
        path: path.resolve(__dirname),
        filename: 'server.js',
        publicPath: '/'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         name: 'manifest',
    //         minChunks: Infinity
    //     },
    // },
    plugins: [
     
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-2'],
                    plugins: [
                        'dynamic-import-node',
                        'react-html-attrs',
                        ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'public/[name].[ext]'
                        }
                    }
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'public/[name].[ext]'
                        }
                    }
                ]
              }
        ]
    },
    devtool: 'source-map',
    // externals: [webpackNodeExternals()],

}

module.exports = [serverConfig, clientConfig];