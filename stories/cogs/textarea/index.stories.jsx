import React from 'react'

import TextareaCog from '@modernpoacher/cogs/cogs/textarea'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Cogs/Textarea',
  component: TextareaCog,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
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
