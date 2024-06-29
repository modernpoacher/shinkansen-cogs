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
    '@babel/env',
    {
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
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        'shinkansen-cogs/common': './src/common/index.mjs',
        'shinkansen-cogs/cogs/checkbox/error-message': './src/cogs/checkbox/error-message/index.jsx',
        'shinkansen-cogs/cogs/checkbox/description': './src/cogs/checkbox/description/index.jsx',
        'shinkansen-cogs/cogs/checkbox/field': './src/cogs/checkbox/field/index.jsx',
        'shinkansen-cogs/cogs/checkbox/title': './src/cogs/checkbox/title/index.jsx',
        'shinkansen-cogs/cogs/checkbox': './src/cogs/checkbox/index.jsx',
        'shinkansen-cogs/cogs/email/error-message': './src/cogs/email/error-message/index.jsx',
        'shinkansen-cogs/cogs/email/description': './src/cogs/email/description/index.jsx',
        'shinkansen-cogs/cogs/email/field': './src/cogs/email/field/index.jsx',
        'shinkansen-cogs/cogs/email/title': './src/cogs/email/title/index.jsx',
        'shinkansen-cogs/cogs/email': './src/cogs/email/index.jsx',
        'shinkansen-cogs/cogs/number/error-message': './src/cogs/number/error-message/index.jsx',
        'shinkansen-cogs/cogs/number/description': './src/cogs/number/description/index.jsx',
        'shinkansen-cogs/cogs/number/field': './src/cogs/number/field/index.jsx',
        'shinkansen-cogs/cogs/number/title': './src/cogs/number/title/index.jsx',
        'shinkansen-cogs/cogs/number': './src/cogs/number/index.jsx',
        'shinkansen-cogs/cogs/password/error-message': './src/cogs/password/error-message/index.jsx',
        'shinkansen-cogs/cogs/password/description': './src/cogs/password/description/index.jsx',
        'shinkansen-cogs/cogs/password/field': './src/cogs/password/field/index.jsx',
        'shinkansen-cogs/cogs/password/title': './src/cogs/password/title/index.jsx',
        'shinkansen-cogs/cogs/password': './src/cogs/password/index.jsx',
        'shinkansen-cogs/cogs/radio/error-message': './src/cogs/radio/error-message/index.jsx',
        'shinkansen-cogs/cogs/radio/description': './src/cogs/radio/description/index.jsx',
        'shinkansen-cogs/cogs/radio/field': './src/cogs/radio/field/index.jsx',
        'shinkansen-cogs/cogs/radio/title': './src/cogs/radio/title/index.jsx',
        'shinkansen-cogs/cogs/radio': './src/cogs/radio/index.jsx',
        'shinkansen-cogs/cogs/select/error-message': './src/cogs/select/error-message/index.jsx',
        'shinkansen-cogs/cogs/select/description': './src/cogs/select/description/index.jsx',
        'shinkansen-cogs/cogs/select/field': './src/cogs/select/field/index.jsx',
        'shinkansen-cogs/cogs/select/title': './src/cogs/select/title/index.jsx',
        'shinkansen-cogs/cogs/select': './src/cogs/select/index.jsx',
        'shinkansen-cogs/cogs/text/error-message': './src/cogs/text/error-message/index.jsx',
        'shinkansen-cogs/cogs/text/description': './src/cogs/text/description/index.jsx',
        'shinkansen-cogs/cogs/text/field': './src/cogs/text/field/index.jsx',
        'shinkansen-cogs/cogs/text/title': './src/cogs/text/title/index.jsx',
        'shinkansen-cogs/cogs/text': './src/cogs/text/index.jsx',
        'shinkansen-cogs/cogs/textarea/description': './src/cogs/textarea/description/index.jsx',
        'shinkansen-cogs/cogs/textarea/error-message': './src/cogs/textarea/error-message/index.jsx',
        'shinkansen-cogs/cogs/textarea/field': './src/cogs/textarea/field/index.jsx',
        'shinkansen-cogs/cogs/textarea/title': './src/cogs/textarea/title/index.jsx',
        'shinkansen-cogs/cogs/textarea': './src/cogs/textarea/index.jsx',
        'shinkansen-cogs/cogs': './src/cogs/index.jsx',
        'shinkansen-cogs/components/common/disabled': './src/components/common/disabled/index.jsx',
        'shinkansen-cogs/components/common/readonly': './src/components/common/readonly/index.jsx',
        'shinkansen-cogs/components/common/required': './src/components/common/required/index.jsx',
        'shinkansen-cogs/components/common/text-content': './src/components/common/text-content/index.jsx',
        'shinkansen-cogs/components/description': './src/components/description/index.jsx',
        'shinkansen-cogs/components/error-message': './src/components/error-message/index.jsx',
        'shinkansen-cogs/components/field': './src/components/field/index.jsx',
        'shinkansen-cogs/components/title': './src/components/title/index.jsx',
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
