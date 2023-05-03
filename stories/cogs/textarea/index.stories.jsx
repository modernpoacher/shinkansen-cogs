import React from 'react'

import errors from 'stories/errors'
import TextareaState from 'stories/state/textarea'
import TextareaCog from '#cogs/textarea'

export default {
  title: 'Components/Textarea',
  component: TextareaCog,
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
  <TextareaState value='Value'>
    <TextareaCog {...args} />
  </TextareaState>
)

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}

export const DefaultValue = (args) => (
  <TextareaState defaultValue='Default value'>
    <TextareaCog {...args} />
  </TextareaState>
)

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'textarea',
  name: 'textarea'
}
