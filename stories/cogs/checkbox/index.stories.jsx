import React from 'react'

import CheckboxCog from '#cogs/cogs/checkbox'
import errors from '#stories/errors'
import CheckboxState from '#stories/state/checkbox'

export default {
  title: 'Stories/Cogs/Checkbox',
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

export function Checked (args) {
  const VALUE = 'value'

  return (
    <CheckboxState value={VALUE} checked>
      <CheckboxCog {...args} value={VALUE} />
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
  const VALUE = 'value'

  return (
    <CheckboxState value={VALUE} defaultChecked>
      <CheckboxCog {...args} value={VALUE} />
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
