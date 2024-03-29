import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    new ReactRefreshWebpackPlugin(),
    // new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new BundleAnalyzerPlugin({ analyzerMode: isDev ? 'server' : 'disabled' }),
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}
