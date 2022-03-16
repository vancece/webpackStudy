module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        publicPath: "/dist",
    },
    mode: "development",
    devServer: {
        static: ['src', 'dist'],
    }
}