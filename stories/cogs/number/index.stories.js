import React from 'react'

import errors from 'stories/errors'
import NumberState from 'stories/state/number'
import NumberCog from 'shinkansen-cogs/cogs/number'

export default {
  title: 'Components/Number',
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
  <NumberState value={1}>
    <NumberCog {...args} />
  </NumberState>
)

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

export const DefaultValue = (args) => (
  <NumberState defaultValue={1}>
    <NumberCog {...args} />
  </NumberState>
)

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
