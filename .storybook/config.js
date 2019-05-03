/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import {
  configure
} from '@storybook/react'

import '../stories'

function loaders () { console.log('loaders()') }

configure(loaders, module)
