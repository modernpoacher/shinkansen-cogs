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
  .add('Required and default props', () => <Checkbox name='checkbox' />)

storiesOf('Email', module)
  .add('Required and default props', () => <Email name='email' />)

storiesOf('Number', module)
  .add('Required and default props', () => <Number name='number' />)

storiesOf('Password', module)
  .add('Required and default props', () => <Password name='password' />)

storiesOf('Radio', module)
  .add('Required and default props', () => <Radio name='radio' id='radio-one' />)

storiesOf('Select', module)
  .add('Required and default props', () => (
    <Select name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Select>
  ))

storiesOf('Text', module)
  .add('Required and default props', () => <Text name='text' />)

storiesOf('Textarea', module)
  .add('Required and default props', () => <Textarea name='textarea' />)
