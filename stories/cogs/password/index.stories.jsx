/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 */

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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <PasswordState value='password'>
        <PasswordCog {...args} />
      </PasswordState>
    </form>
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
    <form>
      <PasswordState defaultValue='password'>
        <PasswordCog {...args} />
      </PasswordState>
    </form>
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
