import React from 'react'

import errors from 'stories/errors'
import PasswordState from 'stories/state/password'
import PasswordCog from 'shinkansen-cogs/cogs/password'

export default {
  title: 'Components/Password',
  component: PasswordCog,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'select',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    },
    placeholder: {
      defaultValue: ''
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
