const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
//const RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer');

function resolve(additionalPath) {
    return path.resolve(__dirname, additionalPath);
}

const stats = {
    colors: true,
    hash: false,
    assets: false,
    chunks: true,
    chunkModules: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    publicPath: false,
    timings: true,
    errorDetails: true,
};


const paths = {
    nodeModules: resolve('./node_modules'),
    components: resolve('./app/components'),
    vendor: resolve('./app/vendor'),
    isVendor(filePath) {
        return filePath.includes(this.nodeModules) || filePath.includes(this.vendor);
    },
};

const config = {
    stats,
    devServer: {
        disableHostCheck: true,
        contentBase: resolve('./app'),
        port: 3000,
        stats,
        staticOptions: {
            redirect: false
        },
        historyApiFallback: {
            rewrites: [{
                from: /\//,
                to: '/index.html'
            }]
        }
    },
    entry: {
        app: resolve('./app/index.js'),
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: resolve(`./build`),
        pathinfo: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'file-loader?name=html/[name].[hash:6].[ext]'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),

        new HtmlWebpackPlugin({
            template: resolve('./app/index.html'),
            filename: 'index.html',
        })
    ]
};

module.exports = config;
