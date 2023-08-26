import React from 'react'

import PasswordCog from '@modernpoacher/cogs/cogs/password'
import PasswordState from '#stories/state/password'

export default {
  title: 'Stories/Cogs/Password',
  component: PasswordCog,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    }
  }
}

export const Value = (args) => (
  <PasswordState value='password'>
    <PasswordCog {...args} />
  </PasswordState>
)

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

export const DefaultValue = (args) => (
  <PasswordState defaultValue='password'>
    <PasswordCog {...args} />
  </PasswordState>
)

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
