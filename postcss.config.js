/* eslint-disable global-require */
module.exports = {
    plugins: [require('autoprefixer')({}), require('postcss-easy-import')({ prefix: '_' })],
};