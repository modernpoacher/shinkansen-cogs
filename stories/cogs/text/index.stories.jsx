import React from 'react'

import TextCog from 'shinkansen-cogs/cogs/text'
import errors from '#stories/errors'
import TextState from '#stories/state/text'

export default {
  title: 'Stories/Cogs/Text',
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
          array: 'Array',
          object: 'Object',
          boolean: 'Boolean',
          null: 'Null'
        }
      }
    },
    placeholder: {
      defaultValue: ''
    }
  }
}

export function Value (args) {
  return (
    <TextState value='Value'>
      <TextCog {...args} />
    </TextState>
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
  id: 'text',
  name: 'text'
}

export function DefaultValue (args) {
  return (
    <TextState defaultValue='Default value'>
      <TextCog {...args} />
    </TextState>
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
  id: 'text',
  name: 'text'
}
