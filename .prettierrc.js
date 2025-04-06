module.exports = {
  // ...其他配置...
  plugins: [
    // 确保使用 require.resolve 来解析插件路径
    require.resolve('prettier-plugin-organize-imports')
  ]
}