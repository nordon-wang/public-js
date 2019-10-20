// 重写 react 的 webpack 配置项
const { override, addDecoratorsLegacy } = require("customize-cra")

module.exports = override(
  addDecoratorsLegacy() // 增加 decorator
)
