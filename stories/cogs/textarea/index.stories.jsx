import React from 'react'

import TextareaCog from 'shinkansen-cogs/cogs/textarea'
import errors from '#stories/errors'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Cogs/Textarea',
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
