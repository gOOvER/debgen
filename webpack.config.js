const path = require("path");

const mode = process.env.NODE_ENV || 'development';
const port = 3000;
const openBrowser = true;

module.exports = {
    entry: {
        app: [
            "./src/index.js"
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        clean: true,
    },
    mode: mode,
    devtool: mode === 'development' ? "source-map" : false,
    devServer: {
        port: port,
        open: openBrowser,
        historyApiFallback: {
            index: "index.html"
        },
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        hot: true,
    },
    optimization: {
        minimize: mode === 'production',
    },
};