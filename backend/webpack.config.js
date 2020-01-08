const path = require("path");
const Dotenv = require("dotenv-webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    target: "node",
    entry: {
        server: ["./src/server.ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    devtool: "source-map",
    optimization: {
        minimize: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({path: ".env", safe: false, silent: false})
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
        modules: [path.resolve("./node_modules"), path.resolve("./src")]
    }
};
