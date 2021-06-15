const {
    override,
    addLessLoader,
    addWebpackAlias
} = require("customize-cra")
const path = require('path')
function resolve(dir){
    return path.join(__dirname, dir);
}

module.exports =  override(
    addLessLoader({
        javascriptEnabled: true,
    }),
    addWebpackAlias({
        "@": resolve("src")
    })
)