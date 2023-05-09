import React from 'react'

import SelectCog from 'shinkansen-cogs/cogs/select'
import errors from '#stories/errors'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Cogs/Select',
  component: SelectCog,
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
  <SelectState value='one'>
    <SelectCog {...args}>
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </SelectCog>
  </SelectState>
)

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

export const DefaultValue = (args) => (
  <SelectState defaultValue='one'>
    <SelectCog {...args}>
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </SelectCog>
  </SelectState>
)

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}
