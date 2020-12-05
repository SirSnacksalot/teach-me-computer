/* eslint-disable @typescript-eslint/no-var-requires */
var webpack = require('webpack');
var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let configs = [{
    entry: {
        'home': __dirname + '/src/index.tsx',
    },

    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    
    output: {
        filename: '[name]/[name]-bundle.js',
        path: path.resolve(__dirname, '../resources/static/built/js'), 
        publicPath: '/',
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CleanWebpackPlugin(),
    ],
}];
    
module.exports = configs;