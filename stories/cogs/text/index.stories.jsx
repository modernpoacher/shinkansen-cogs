import React from 'react'

import TextCog from '@modernpoacher/cogs/cogs/text'
import TextState from '#stories/state/text'

export default {
  title: 'Stories/Cogs/Text',
  component: TextCog,
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
