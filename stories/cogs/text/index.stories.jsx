import React from 'react'

import errors from 'stories/errors'
import TextState from 'stories/state/text'
import TextCog from 'shinkansen-cogs/cogs/text'

export default {
  title: 'Components/Text',
  component: TextCog,
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
  <TextState value='Value'>
    <TextCog {...args} />
  </TextState>
)

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}

export const DefaultValue = (args) => (
  <TextState defaultValue='Default value'>
    <TextCog {...args} />
  </TextState>
)

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}
