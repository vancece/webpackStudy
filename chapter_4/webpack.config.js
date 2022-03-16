module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'dist',
    },
    devServer: {
        static: ['./src', 'dist'],
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     options: {
            //         cacheDirectory: true,
            //         preset: [['env', {module: false}]]
            //     },
            //     exclude: /node_modules/,
            // },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}