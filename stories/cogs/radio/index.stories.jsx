/**
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 */

import React from 'react'

import RadioCog from '#cogs/cogs/radio'
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

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function Checked (args) {
  return (
    <form>
      <RadioState value='two' checked>
        <RadioCog
          {...args}
          id='radio-a'
          value='one'
        />
        <RadioCog
          {...args}
          id='radio-b'
          value='two'
        />
        <RadioCog
          {...args}
          id='radio-c'
          value='three'
        />
      </RadioState>
    </form>
  )
}

Checked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'radio',
  name: 'radio'
}

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <form>
      <RadioState value='two' defaultChecked>
        <RadioCog
          {...args}
          id='radio-1'
          value='one'
        />
        <RadioCog
          {...args}
          id='radio-2'
          value='two'
        />
        <RadioCog
          {...args}
          id='radio-3'
          value='three'
        />
      </RadioState>
    </form>
  )
}

DefaultChecked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'radio',
  name: 'radio'
}
