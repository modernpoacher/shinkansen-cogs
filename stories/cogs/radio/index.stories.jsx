import React from 'react'

import RadioCog from 'shinkansen-cogs/cogs/radio'
import errors from '#stories/errors'
import RadioState from '#stories/state/radio'

export default {
  title: 'Stories/Cogs/Radio',
  component: RadioCog,
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
