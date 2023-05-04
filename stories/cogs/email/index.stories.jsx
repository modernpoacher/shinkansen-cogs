import React from 'react'

import errors from 'stories/errors'
import EmailState from 'stories/state/email'
import EmailCog from 'shinkansen-cogs/cogs/email'

export default {
  title: 'Components/Email',
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
  <EmailState value='email@email.com'>
    <EmailCog {...args} />
  </EmailState>
)

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

export const DefaultValue = (args) => (
  <EmailState defaultValue='email@email.com'>
    <EmailCog {...args} />
  </EmailState>
)

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
