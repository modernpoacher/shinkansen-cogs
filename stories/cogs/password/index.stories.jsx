/**
 *  @typedef {CogsTypes.Cogs.Cog.ValueProps} ValueProps
 */

import React from 'react'

import PasswordCog from '#cogs/cogs/password'
import errors from '#stories/errors'
import PasswordState from '#stories/state/password'

export default {
  title: 'Stories/Cogs/Password',
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
          array: 'Array',
          object: 'Object',
          boolean: 'Boolean',
          null: 'Null'
        }
      },
      description: 'errorMessage'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
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
