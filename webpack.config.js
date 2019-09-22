module.exports = {
    entry: __dirname + '/scripts/index.jsx',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
            ]
         },
    devServer: {
        contentBase: __dirname + '/dist',
        port: 3000,
        open: true
    }
};
