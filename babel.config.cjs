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
      root: '.',
      cwd: 'babelrc',
      alias: {
        '#cogs/checkbox': './src/cogs/checkbox/index.jsx',
        '#cogs/email': './src/cogs/email/index.jsx',
        '#cogs/number': './src/cogs/number/index.jsx',
        '#cogs/password': './src/cogs/password/index.jsx',
        '#cogs/radio': './src/cogs/radio/index.jsx',
        '#cogs/select': './src/cogs/select/index.jsx',
        '#cogs/text': './src/cogs/text/index.jsx',
        '#cogs/textarea': './src/cogs/textarea/index.jsx',
        '#cogs': './src/cogs/index.jsx',
        '#components/common/disabled': './src/components/common/disabled/index.jsx',
        '#components/common/readonly': './src/components/common/readonly/index.jsx',
        '#components/common/required': './src/components/common/required/index.jsx',
        '#components/common/text-content': './src/components/common/text-content/index.jsx',
        '#components/description/checkbox': './src/components/description/checkbox/index.jsx',
        '#components/description/email': './src/components/description/email/index.jsx',
        '#components/description/number': './src/components/description/number/index.jsx',
        '#components/description/password': './src/components/description/password/index.jsx',
        '#components/description/radio': './src/components/description/radio/index.jsx',
        '#components/description/select': './src/components/description/select/index.jsx',
        '#components/description/text': './src/components/description/text/index.jsx',
        '#components/description/textarea': './src/components/description/textarea/index.jsx',
        '#components/description': './src/components/description/index.jsx',
        '#components/error-message/checkbox': './src/components/error-message/checkbox/index.jsx',
        '#components/error-message/email': './src/components/error-message/email/index.jsx',
        '#components/error-message/number': './src/components/error-message/number/index.jsx',
        '#components/error-message/password': './src/components/error-message/password/index.jsx',
        '#components/error-message/radio': './src/components/error-message/radio/index.jsx',
        '#components/error-message/select': './src/components/error-message/select/index.jsx',
        '#components/error-message/text': './src/components/error-message/text/index.jsx',
        '#components/error-message/textarea': './src/components/error-message/textarea/index.jsx',
        '#components/error-message': './src/components/error-message/index.jsx',
        '#components/field/checkbox': './src/components/field/checkbox/index.jsx',
        '#components/field/email': './src/components/field/email/index.jsx',
        '#components/field/number': './src/components/field/number/index.jsx',
        '#components/field/password': './src/components/field/password/index.jsx',
        '#components/field/radio': './src/components/field/radio/index.jsx',
        '#components/field/select': './src/components/field/select/index.jsx',
        '#components/field/text': './src/components/field/text/index.jsx',
        '#components/field/textarea': './src/components/field/textarea/index.jsx',
        '#components/field': './src/components/field/index.jsx',
        '#components/title/checkbox': './src/components/title/checkbox/index.jsx',
        '#components/title/email': './src/components/title/email/index.jsx',
        '#components/title/number': './src/components/title/number/index.jsx',
        '#components/title/password': './src/components/title/password/index.jsx',
        '#components/title/radio': './src/components/title/radio/index.jsx',
        '#components/title/select': './src/components/title/select/index.jsx',
        '#components/title/text': './src/components/title/text/index.jsx',
        '#components/title/textarea': './src/components/title/textarea/index.jsx',
        '#components/title': './src/components/title/index.jsx',
        '#transformers/error-message': './src/transformers/error-message/index.mjs',
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
