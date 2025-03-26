/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 */

import React from 'react'

import TextareaCog from '#cogs/cogs/textarea'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Cogs/Textarea',
  component: TextareaCog,
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
      <TextareaState value='Value'>
        <TextareaCog {...args} />
      </TextareaState>
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
  id: 'textarea',
  name: 'textarea'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <TextareaState defaultValue='Default value'>
        <TextareaCog {...args} />
      </TextareaState>
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
  id: 'textarea',
  name: 'textarea'
}
