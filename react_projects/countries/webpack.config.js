let mode = process.env.NODE_ENV || "development"

const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: mode,

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        // chunkFilename: "[name].bundle.js",
        assetModuleFilename: "./images/[name][ext]",
    },
    optimization: {
        // minimize: true,
        // minimizer: [new TerserPlugin()],

        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
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
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
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
                // name: "chrome",
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
