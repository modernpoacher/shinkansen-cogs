const debug = require('debug')

const log = debug('shinkansen-cogs')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ],
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        'shinkansen-cogs/cogs/checkbox': './src/cogs/checkbox/index.cjs',
        'shinkansen-cogs/cogs/email': './src/cogs/email/index.cjs',
        'shinkansen-cogs/cogs/number': './src/cogs/number/index.cjs',
        'shinkansen-cogs/cogs/password': './src/cogs/password/index.cjs',
        'shinkansen-cogs/cogs/radio': './src/cogs/radio/index.cjs',
        'shinkansen-cogs/cogs/select': './src/cogs/select/index.cjs',
        'shinkansen-cogs/cogs/text': './src/cogs/text/index.cjs',
        'shinkansen-cogs/cogs/textarea': './src/cogs/textarea/index.cjs',
        'shinkansen-cogs/cogs': './src/cogs/index.cjs',
        'shinkansen-cogs/components/common/disabled': './src/components/common/disabled/index.cjs',
        'shinkansen-cogs/components/common/readonly': './src/components/common/readonly/index.cjs',
        'shinkansen-cogs/components/common/required': './src/components/common/required/index.cjs',
        'shinkansen-cogs/components/common/text-content': './src/components/common/text-content/index.cjs',
        'shinkansen-cogs/components/description/checkbox': './src/components/description/checkbox/index.cjs',
        'shinkansen-cogs/components/description/email': './src/components/description/email/index.cjs',
        'shinkansen-cogs/components/description/number': './src/components/description/number/index.cjs',
        'shinkansen-cogs/components/description/password': './src/components/description/password/index.cjs',
        'shinkansen-cogs/components/description/radio': './src/components/description/radio/index.cjs',
        'shinkansen-cogs/components/description/select': './src/components/description/select/index.cjs',
        'shinkansen-cogs/components/description/text': './src/components/description/text/index.cjs',
        'shinkansen-cogs/components/description/textarea': './src/components/description/textarea/index.cjs',
        'shinkansen-cogs/components/description': './src/components/description/index.cjs',
        'shinkansen-cogs/components/error-message/checkbox': './src/components/error-message/checkbox/index.cjs',
        'shinkansen-cogs/components/error-message/email': './src/components/error-message/email/index.cjs',
        'shinkansen-cogs/components/error-message/number': './src/components/error-message/number/index.cjs',
        'shinkansen-cogs/components/error-message/password': './src/components/error-message/password/index.cjs',
        'shinkansen-cogs/components/error-message/radio': './src/components/error-message/radio/index.cjs',
        'shinkansen-cogs/components/error-message/select': './src/components/error-message/select/index.cjs',
        'shinkansen-cogs/components/error-message/text': './src/components/error-message/text/index.cjs',
        'shinkansen-cogs/components/error-message/textarea': './src/components/error-message/textarea/index.cjs',
        'shinkansen-cogs/components/error-message': './src/components/error-message/index.cjs',
        'shinkansen-cogs/components/field/checkbox': './src/components/field/checkbox/index.cjs',
        'shinkansen-cogs/components/field/email': './src/components/field/email/index.cjs',
        'shinkansen-cogs/components/field/number': './src/components/field/number/index.cjs',
        'shinkansen-cogs/components/field/password': './src/components/field/password/index.cjs',
        'shinkansen-cogs/components/field/radio': './src/components/field/radio/index.cjs',
        'shinkansen-cogs/components/field/select': './src/components/field/select/index.cjs',
        'shinkansen-cogs/components/field/text': './src/components/field/text/index.cjs',
        'shinkansen-cogs/components/field/textarea': './src/components/field/textarea/index.cjs',
        'shinkansen-cogs/components/field': './src/components/field/index.cjs',
        'shinkansen-cogs/components/title/checkbox': './src/components/title/checkbox/index.cjs',
        'shinkansen-cogs/components/title/email': './src/components/title/email/index.cjs',
        'shinkansen-cogs/components/title/number': './src/components/title/number/index.cjs',
        'shinkansen-cogs/components/title/password': './src/components/title/password/index.cjs',
        'shinkansen-cogs/components/title/radio': './src/components/title/radio/index.cjs',
        'shinkansen-cogs/components/title/select': './src/components/title/select/index.cjs',
        'shinkansen-cogs/components/title/text': './src/components/title/text/index.cjs',
        'shinkansen-cogs/components/title/textarea': './src/components/title/textarea/index.cjs',
        'shinkansen-cogs/components/title': './src/components/title/index.cjs',
        'shinkansen-cogs/transformers/error-message': './src/transformers/error-message/index.mjs',
        build: './build',
        stories: './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [/node_modules\/(?!shinkansen-)/]
  }
}
