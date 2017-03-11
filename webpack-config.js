/**
 * Created by vincebloise on 1/17/17.
 */
const path = require('path');

module.exports = {
    entry: "./build/auction-rest-server-angular",
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: '.'
    }
};