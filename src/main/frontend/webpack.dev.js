/* eslint-disable @typescript-eslint/no-var-requires */
var common = require('./webpack.config.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

for (let config of common) {
    Object.assign(config, {
        mode: 'development',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                        loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true,
                    },
                },
                {
                    test: /\.(png|woff(2)?|eot|ttf|svg|gif)(\?[a-z0-9=.]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                },
            ],
        },

        plugins: [new ForkTsCheckerWebpackPlugin()],

        // watchOptions: {
        //     ignored: /node_modules/,
        // },
    });
}

module.exports = common;
