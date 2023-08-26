import React from 'react'

import RadioCog from '@modernpoacher/cogs/cogs/radio'
import RadioState from '#stories/state/radio'

export default {
  title: 'Stories/Cogs/Radio',
  component: RadioCog,
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
  <RadioState value='value'>
    <RadioCog {...args} id='radio' value='value' />
  </RadioState>
)

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

export const DefaultValue = (args) => (
  <RadioState defaultValue='value'>
    <RadioCog {...args} id='radio' value='value' />
  </RadioState>
)

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
