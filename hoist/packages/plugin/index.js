const fs = require('fs')
const {join} = require('path')
const resolveFrom = require('resolve-from')
const p = fs.realpathSync(require.resolve('@pmmmwh/react-refresh-webpack-plugin'))
const depWebpackPath = resolveFrom(p, 'webpack')
const pluginWebpackPath = require.resolve('webpack/package.json')

console.log({depWebpackPath, pluginWebpackPath})

