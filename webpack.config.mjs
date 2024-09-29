import path from 'node:path'
import Webpack from 'webpack'
import {
  CleanWebpackPlugin
} from 'clean-webpack-plugin'
import RemoveFilesPlugin from 'remove-files-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import {
  sourcePath as SOURCE_PATH,
  targetPath as TARGET_PATH,
  modulePath as MODULE_PATH
} from '#build/paths'

const {
  SourceMapDevToolPlugin
} = Webpack

export default {
  mode: 'production',
  entry: {
    'preview-head': path.join(SOURCE_PATH, 'sass/preview-head.scss')
  },
  output: {
    path: path.join(TARGET_PATH, 'css')
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                config: false,
                plugins: [
                  'postcss-import',
                  'postcss-discard-comments',
                  'postcss-discard-empty',
                  [
                    'postcss-map', {
                      maps: [
                        path.join(MODULE_PATH, '@modernpoacher/design-system/src/tokens/palette.json')
                      ]
                    }
                  ],
                  [
                    'autoprefixer', {
                      remove: false
                    }
                  ],
                  [
                    'perfectionist', {
                      trimLeadingZero: false,
                      sourcemap: true,
                      indentSize: 2,
                      format: 'expanded',
                      syntax: 'scss'
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                loadPaths: [
                  path.join(MODULE_PATH, '@modernpoacher/design-system/src/sass')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanOnceBeforeBuildPatterns: [
        path.join(TARGET_PATH, 'css/*.css'),
        path.join(TARGET_PATH, 'css/*.css.map')
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new SourceMapDevToolPlugin({
      test: /\.css$/i,
      filename: '[name].css.map'
    }),
    new RemoveFilesPlugin({
      after: {
        test: [
          {
            folder: path.join(TARGET_PATH, 'css'),
            method (filePath) {
              return /\.js$/m.test(filePath)
            }
          }
        ]
      }
    })
  ]
}
