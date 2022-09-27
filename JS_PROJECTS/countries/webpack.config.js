let mode = process.env.NODE_ENV || "development"

const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: mode,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "./images/[name][ext]",
        
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.pug$/i,
                loader: "pug-loader",
                exclude: /(node_modules|bower_components)/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devtool: "source-map",
    devServer: {
        static: "dist",
        hot: true,
        open: {
            app: {
                name: "firefox",
            },
        },
    },
    target: "web",
}


// output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "[name].js",
//         assetModuleFilename: "./images/[hash][ext][query]",
//         clean: true,
        
//     },