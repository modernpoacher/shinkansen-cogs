import React from 'react'

import NumberCog from 'shinkansen-cogs/cogs/number'
import errors from '#stories/errors'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Cogs/Number',
  component: NumberCog,
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
    <NumberState value={1}>
      <NumberCog {...args} />
    </NumberState>
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
  id: 'number',
  name: 'number'
}

export function DefaultValue (args) {
  return (
    <NumberState defaultValue={1}>
      <NumberCog {...args} />
    </NumberState>
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
  id: 'number',
  name: 'number'
}
