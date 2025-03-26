/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 */

import React from 'react'

import NumberCog from '#cogs/cogs/number'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Cogs/Number',
  component: NumberCog,
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
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <NumberState value={1}>
        <NumberCog {...args} />
      </NumberState>
    </form>
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
  id: 'number',
  name: 'number'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <NumberState defaultValue={1}>
        <NumberCog {...args} />
      </NumberState>
    </form>
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
  id: 'number',
  name: 'number'
}
