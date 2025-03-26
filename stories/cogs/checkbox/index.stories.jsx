/**
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 */

import React from 'react'

import CheckboxCog from '#cogs/cogs/checkbox'
import CheckboxState from '#stories/state/checkbox'

export default {
  title: 'Stories/Cogs/Checkbox',
  component: CheckboxCog,
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
      <CheckboxState checked>
        <CheckboxCog {...args} value='value' />
      </CheckboxState>
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
  id: 'checkbox',
  name: 'checkbox'
}

/**
 *  @param {CheckProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <form>
      <CheckboxState defaultChecked>
        <CheckboxCog {...args} value='value' />
      </CheckboxState>
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
  id: 'checkbox',
  name: 'checkbox'
}
