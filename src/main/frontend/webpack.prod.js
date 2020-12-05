/* eslint-disable @typescript-eslint/no-var-requires */
var common = require('./webpack.config.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// var MinifyPlugin = require('babel-minify-webpack-plugin');

for (let config of common) {
  Object.assign(config, {
    mode: 'production',
    module: {
      rules: [
        {
            test: /\.s(a|c)ss$/,
            loader: [
                {
                  loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        modules: true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                    },
                },
            ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'cache-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                // disable type checker - we will use it in fork plugin
                transpileOnly: true
              },
            }
          ]
        },
        { 
          test: /\.(png|woff(2)?|eot|ttf|svg|gif)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[id].[contenthash].css'
      }),
    ],
    
  });
}

module.exports = common;
