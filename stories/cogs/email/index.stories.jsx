import React from 'react'

import EmailCog from '@modernpoacher/cogs/cogs/email'
import EmailState from '#stories/state/email'

export default {
  title: 'Stories/Cogs/Email',
  component: EmailCog,
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
