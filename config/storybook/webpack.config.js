const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader')
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
      async: false,
      checkSyntacticErrors: true
    })
  )

  return config
}
