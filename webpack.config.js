const path = require("path")

module.exports = {
    entry : "./src/index.js",
    output:{
        path : path.resolve(__dirname , "buid"),
        filename :  "bundel.js"
    },

    module: {
        rules: [{test: /\.css$/ , use: [ "style-loader" , "css-loader" ]}],
    },
}