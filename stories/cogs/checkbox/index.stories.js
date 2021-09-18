import React from 'react'

import errors from 'stories/errors'
import CheckboxState from 'stories/state/checkbox'
import CheckboxCog from 'shinkansen-cogs/cogs/checkbox'

export default {
  title: 'Components/Checkbox',
  component: CheckboxCog,
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

export const Checked = (args) => (
  <CheckboxState checked>
    <CheckboxCog {...args} />
  </CheckboxState>
)

Checked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'checkbox'
}

export const DefaultChecked = (args) => (
  <CheckboxState defaultChecked>
    <CheckboxCog {...args} />
  </CheckboxState>
)

DefaultChecked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'checkbox'
}
