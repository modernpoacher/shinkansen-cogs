import React from 'react'

import PasswordCog from '#cogs/cogs/password'
import PasswordState from '#stories/state/password'

export default {
  title: 'Stories/Cogs/Password',
  component: PasswordCog,
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <PasswordState value='password'>
      <PasswordCog {...args} />
    </PasswordState>
  )
}

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'password',
  name: 'password'
}

export function DefaultValue (args) {
  return (
    <PasswordState defaultValue='password'>
      <PasswordCog {...args} />
    </PasswordState>
  )
}

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'password',
  name: 'password'
}
