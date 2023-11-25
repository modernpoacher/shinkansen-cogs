import React from 'react'

import CheckboxCog from '@modernpoacher/cogs/cogs/checkbox'
import CheckboxState from '#stories/state/checkbox'

export default {
  title: 'Stories/Cogs/Checkbox',
  component: CheckboxCog,
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

export function Checked (args) {
  return (
    <CheckboxState checked>
      <CheckboxCog {...args} value='value' />
    </CheckboxState>
  )
}

Checked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}

export function DefaultChecked (args) {
  return (
    <CheckboxState defaultValue='value'>
      <CheckboxCog {...args} value='value' />
    </CheckboxState>
  )
}

DefaultChecked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}
