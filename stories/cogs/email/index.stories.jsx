import React from 'react'

import EmailCog from '#cogs/cogs/email'
import errors from '#stories/errors'
import EmailState from '#stories/state/email'

export default {
  title: 'Stories/Cogs/Email',
  component: EmailCog,
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

export function Value (args) {
  return (
    <EmailState value='email@email.com'>
      <EmailCog {...args} />
    </EmailState>
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

export function DefaultValue (args) {
  return (
    <EmailState defaultValue='email@email.com'>
      <EmailCog {...args} />
    </EmailState>
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
