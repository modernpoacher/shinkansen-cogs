import React from 'react'

import RadioCog from '@modernpoacher/cogs/cogs/radio'
import RadioState from '#stories/state/radio'

export default {
  title: 'Stories/Cogs/Radio',
  component: RadioCog,
  argTypes: {
    errorMessage: {
      control: 'text',
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
    <RadioState value='value'>
      <RadioCog {...args} id='radio' value='value' />
    </RadioState>
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
  name: 'radio'
}

export function DefaultValue (args) {
  return (
    <RadioState defaultValue='value'>
      <RadioCog {...args} id='radio' value='value' />
    </RadioState>
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
  name: 'radio'
}
