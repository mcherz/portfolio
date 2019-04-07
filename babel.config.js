module.exports = function (api) {
  api.cache(true)

  const presets = [
    "@babel/env",
    "@babel/react"
  ]
  const plugins = [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-spread",
  ]

  return {
    presets,
    plugins
  }
}
