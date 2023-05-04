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
      root: [
        '.'
      ],
      alias: {
        'shinkansen-cogs/cogs/checkbox': './src/cogs/checkbox/index.jsx',
        'shinkansen-cogs/cogs/email': './src/cogs/email/index.jsx',
        'shinkansen-cogs/cogs/number': './src/cogs/number/index.jsx',
        'shinkansen-cogs/cogs/password': './src/cogs/password/index.jsx',
        'shinkansen-cogs/cogs/radio': './src/cogs/radio/index.jsx',
        'shinkansen-cogs/cogs/select': './src/cogs/select/index.jsx',
        'shinkansen-cogs/cogs/text': './src/cogs/text/index.jsx',
        'shinkansen-cogs/cogs/textarea': './src/cogs/textarea/index.jsx',
        'shinkansen-cogs/cogs': './src/cogs/index.jsx',
        'shinkansen-cogs/components/common/disabled': './src/components/common/disabled/index.jsx',
        'shinkansen-cogs/components/common/readonly': './src/components/common/readonly/index.jsx',
        'shinkansen-cogs/components/common/required': './src/components/common/required/index.jsx',
        'shinkansen-cogs/components/common/text-content': './src/components/common/text-content/index.jsx',
        'shinkansen-cogs/components/description/checkbox': './src/components/description/checkbox/index.jsx',
        'shinkansen-cogs/components/description/email': './src/components/description/email/index.jsx',
        'shinkansen-cogs/components/description/number': './src/components/description/number/index.jsx',
        'shinkansen-cogs/components/description/password': './src/components/description/password/index.jsx',
        'shinkansen-cogs/components/description/radio': './src/components/description/radio/index.jsx',
        'shinkansen-cogs/components/description/select': './src/components/description/select/index.jsx',
        'shinkansen-cogs/components/description/text': './src/components/description/text/index.jsx',
        'shinkansen-cogs/components/description/textarea': './src/components/description/textarea/index.jsx',
        'shinkansen-cogs/components/description': './src/components/description/index.jsx',
        'shinkansen-cogs/components/error-message/checkbox': './src/components/error-message/checkbox/index.jsx',
        'shinkansen-cogs/components/error-message/email': './src/components/error-message/email/index.jsx',
        'shinkansen-cogs/components/error-message/number': './src/components/error-message/number/index.jsx',
        'shinkansen-cogs/components/error-message/password': './src/components/error-message/password/index.jsx',
        'shinkansen-cogs/components/error-message/radio': './src/components/error-message/radio/index.jsx',
        'shinkansen-cogs/components/error-message/select': './src/components/error-message/select/index.jsx',
        'shinkansen-cogs/components/error-message/text': './src/components/error-message/text/index.jsx',
        'shinkansen-cogs/components/error-message/textarea': './src/components/error-message/textarea/index.jsx',
        'shinkansen-cogs/components/error-message': './src/components/error-message/index.jsx',
        'shinkansen-cogs/components/field/checkbox': './src/components/field/checkbox/index.jsx',
        'shinkansen-cogs/components/field/email': './src/components/field/email/index.jsx',
        'shinkansen-cogs/components/field/number': './src/components/field/number/index.jsx',
        'shinkansen-cogs/components/field/password': './src/components/field/password/index.jsx',
        'shinkansen-cogs/components/field/radio': './src/components/field/radio/index.jsx',
        'shinkansen-cogs/components/field/select': './src/components/field/select/index.jsx',
        'shinkansen-cogs/components/field/text': './src/components/field/text/index.jsx',
        'shinkansen-cogs/components/field/textarea': './src/components/field/textarea/index.jsx',
        'shinkansen-cogs/components/field': './src/components/field/index.jsx',
        'shinkansen-cogs/components/title/checkbox': './src/components/title/checkbox/index.jsx',
        'shinkansen-cogs/components/title/email': './src/components/title/email/index.jsx',
        'shinkansen-cogs/components/title/number': './src/components/title/number/index.jsx',
        'shinkansen-cogs/components/title/password': './src/components/title/password/index.jsx',
        'shinkansen-cogs/components/title/radio': './src/components/title/radio/index.jsx',
        'shinkansen-cogs/components/title/select': './src/components/title/select/index.jsx',
        'shinkansen-cogs/components/title/text': './src/components/title/text/index.jsx',
        'shinkansen-cogs/components/title/textarea': './src/components/title/textarea/index.jsx',
        'shinkansen-cogs/components/title': './src/components/title/index.jsx',
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
    plugins
  }
}
