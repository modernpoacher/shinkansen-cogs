import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  Checkbox,
  Email,
  Number,
  Password,
  Radio,
  Select,
  Text,
  Textarea
} from '~/src'

storiesOf('Checkbox', module)
  .add('Default props', () => <Checkbox />)

storiesOf('Email', module)
  .add('Default props', () => <Email />)

storiesOf('Number', module)
  .add('Default props', () => <Number />)

storiesOf('Password', module)
  .add('Default props', () => <Password />)

storiesOf('Radio', module)
  .add('Default props', () => <Radio />)

storiesOf('Select', module)
  .add('Default props', () => <Select />)

storiesOf('Text', module)
  .add('Default props', () => <Text />)

storiesOf('Textarea', module)
  .add('Default props', () => <Textarea />)
