import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = process.cwd();


export default {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./build"),
        filename: "[name].min.js",
        clean: true       
    },   
    target: "web",
    devServer: {        
        compress: true,
        port: 1337,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", {
                            "legacy": false,
                            decoratorsBeforeExport: true
                        }],
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        }]
    }
};
