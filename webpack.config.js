const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require("./package.json");

var config = {
    target: 'web',
    entry: package.entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${package.name}-${package.version}.bundle.js`,
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: package.title,
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],    
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    babelrc: false,
                    presets: [
                        [
                            "@babel/env",
                            {
                            "targets": {
                                "edge": "17",
                                "firefox": "60",
                                "chrome": "67",
                                "safari": "11.1"
                            },
                            "useBuiltIns": "usage",
                            "corejs": "3.6.5"
                            }
                        ],
                        "@babel/preset-react",
                        "@babel/typescript",                  
                    ],
                    plugins: [
                        "react-hot-loader/babel"
                    ]
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8084,
    }
};
  

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }
    
    return config
}