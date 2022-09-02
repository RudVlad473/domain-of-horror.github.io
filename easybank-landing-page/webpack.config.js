let mode = "development"
if (process.env.NODE_ENV === "production") {
    mode = "production"
}

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: mode,
    entry: {
        bundle: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },

        port: 3000,
        open: true,
        hot: false,
        liveReload: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                // HTML LOADER
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },

    target: "web",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Easybank landing page",
            filename: "index.html",
            template: "src/template.html",
        }),
        new MiniCssExtractPlugin(),
    ],
}


// use: [
//     MiniCssExtractPlugin.loader,
//     "style-loader",
//     "css-loader",
//     "sass-loader",
// ],
