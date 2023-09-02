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
        'shinkansen-cogs/cogs/checkbox/error-message': './src/cogs/checkbox/error-message/index.cjs',
        'shinkansen-cogs/cogs/checkbox/description': './src/cogs/checkbox/description/index.cjs',
        'shinkansen-cogs/cogs/checkbox/field': './src/cogs/checkbox/field/index.cjs',
        'shinkansen-cogs/cogs/checkbox/title': './src/cogs/checkbox/title/index.cjs',
        'shinkansen-cogs/cogs/checkbox': './src/cogs/checkbox/index.cjs',
        'shinkansen-cogs/cogs/email/error-message': './src/cogs/email/error-message/index.cjs',
        'shinkansen-cogs/cogs/email/description': './src/cogs/email/description/index.cjs',
        'shinkansen-cogs/cogs/email/field': './src/cogs/email/field/index.cjs',
        'shinkansen-cogs/cogs/email/title': './src/cogs/email/title/index.cjs',
        'shinkansen-cogs/cogs/email': './src/cogs/email/index.cjs',
        'shinkansen-cogs/cogs/number/error-message': './src/cogs/number/error-message/index.cjs',
        'shinkansen-cogs/cogs/number/description': './src/cogs/number/description/index.cjs',
        'shinkansen-cogs/cogs/number/field': './src/cogs/number/field/index.cjs',
        'shinkansen-cogs/cogs/number/title': './src/cogs/number/title/index.cjs',
        'shinkansen-cogs/cogs/number': './src/cogs/number/index.cjs',
        'shinkansen-cogs/cogs/password/error-message': './src/cogs/password/error-message/index.cjs',
        'shinkansen-cogs/cogs/password/description': './src/cogs/password/description/index.cjs',
        'shinkansen-cogs/cogs/password/field': './src/cogs/password/field/index.cjs',
        'shinkansen-cogs/cogs/password/title': './src/cogs/password/title/index.cjs',
        'shinkansen-cogs/cogs/password': './src/cogs/password/index.cjs',
        'shinkansen-cogs/cogs/radio/error-message': './src/cogs/radio/error-message/index.cjs',
        'shinkansen-cogs/cogs/radio/description': './src/cogs/radio/description/index.cjs',
        'shinkansen-cogs/cogs/radio/field': './src/cogs/radio/field/index.cjs',
        'shinkansen-cogs/cogs/radio/title': './src/cogs/radio/title/index.cjs',
        'shinkansen-cogs/cogs/radio': './src/cogs/radio/index.cjs',
        'shinkansen-cogs/cogs/select/error-message': './src/cogs/select/error-message/index.cjs',
        'shinkansen-cogs/cogs/select/description': './src/cogs/select/description/index.cjs',
        'shinkansen-cogs/cogs/select/field': './src/cogs/select/field/index.cjs',
        'shinkansen-cogs/cogs/select/title': './src/cogs/select/title/index.cjs',
        'shinkansen-cogs/cogs/select': './src/cogs/select/index.cjs',
        'shinkansen-cogs/cogs/text/error-message': './src/cogs/text/error-message/index.cjs',
        'shinkansen-cogs/cogs/text/description': './src/cogs/text/description/index.cjs',
        'shinkansen-cogs/cogs/text/field': './src/cogs/text/field/index.cjs',
        'shinkansen-cogs/cogs/text/title': './src/cogs/text/title/index.cjs',
        'shinkansen-cogs/cogs/text': './src/cogs/text/index.cjs',
        'shinkansen-cogs/cogs/textarea/description': './src/cogs/textarea/description/index.cjs',
        'shinkansen-cogs/cogs/textarea/error-message': './src/cogs/textarea/error-message/index.cjs',
        'shinkansen-cogs/cogs/textarea/field': './src/cogs/textarea/field/index.cjs',
        'shinkansen-cogs/cogs/textarea/title': './src/cogs/textarea/title/index.cjs',
        'shinkansen-cogs/cogs/textarea': './src/cogs/textarea/index.cjs',
        'shinkansen-cogs/cogs': './src/cogs/index.cjs',
        'shinkansen-cogs/components/common/disabled': './src/components/common/disabled/index.cjs',
        'shinkansen-cogs/components/common/readonly': './src/components/common/readonly/index.cjs',
        'shinkansen-cogs/components/common/required': './src/components/common/required/index.cjs',
        'shinkansen-cogs/components/common/text-content': './src/components/common/text-content/index.cjs',
        'shinkansen-cogs/components/description': './src/components/description/index.cjs',
        'shinkansen-cogs/components/error-message': './src/components/error-message/index.cjs',
        'shinkansen-cogs/components/field': './src/components/field/index.cjs',
        'shinkansen-cogs/components/title': './src/components/title/index.cjs',
        'shinkansen-cogs/transformers/error-message': './src/transformers/error-message/index.mjs',
        '#stories/state/checkbox': './stories/state/checkbox/index.jsx',
        '#stories/state/email': './stories/state/email/index.jsx',
        '#stories/state/number': './stories/state/number/index.jsx',
        '#stories/state/password': './stories/state/password/index.jsx',
        '#stories/state/radio': './stories/state/radio/index.jsx',
        '#stories/state/select': './stories/state/select/index.jsx',
        '#stories/state/text': './stories/state/text/index.jsx',
        '#stories/state/textarea': './stories/state/textarea/index.jsx',
        '#stories/state': './stories/state/index.jsx',
        '#stories/errors': './stories/errors.mjs',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen|@modernpoacher)/
    ]
  }
}
