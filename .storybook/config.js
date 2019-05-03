import {
  configure
} from '@storybook/react'

import '../stories'

function loaders () { console.log('loaders()') }

configure(loaders, module)
