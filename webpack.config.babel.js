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
        port: 1337  
    },
    plugins: [
        new HtmlWebpackPlugin({
            
            template: "src/assets/index.html"
        })
    ]
};