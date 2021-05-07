const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("mini-css-extract-plugin");
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: ExtractCSS.loader
                    },
                    {
                        loader: "css-loader"   // 3)Webpack이 CSS를 이해 
                    },
                    {
                        loader: "postcss-loader",   // 2)CSS 호환관련 문제를 해결
                        options: {
                            plugin() {
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"   // 1)Sass 파일을 받아서 CSS로 변환
                    }
                ]
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js" 
    },
    plugins: [new ExtractCSS({
        filename: "styles.css"
    }),
]
};

module.exports = config;