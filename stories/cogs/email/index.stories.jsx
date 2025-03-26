/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 */

import React from 'react'

import EmailCog from '#cogs/cogs/email'
import EmailState from '#stories/state/email'

export default {
  title: 'Stories/Cogs/Email',
  component: EmailCog,
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
      <EmailState value='email@email.com'>
        <EmailCog {...args} />
      </EmailState>
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
  id: 'email',
  name: 'email'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <EmailState defaultValue='email@email.com'>
        <EmailCog {...args} />
      </EmailState>
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
  id: 'email',
  name: 'email'
}
