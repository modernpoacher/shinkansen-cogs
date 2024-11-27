import React from 'react'

import SelectCog from '#cogs/cogs/select'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Cogs/Select',
  component: SelectCog,
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
    <SelectState value='one'>
      <SelectCog {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
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
  id: 'select',
  name: 'select'
}

export function DefaultValue (args) {
  return (
    <SelectState defaultValue='one'>
      <SelectCog {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
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
  id: 'select',
  name: 'select'
}

export function MultipleValue (args) {
  return (
    <SelectState value={['one', 'three']}>
      <SelectCog multiple {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
        <option value='four'>Four</option>
        <option value='five'>Five</option>
        <option value='six'>Six</option>
      </SelectCog>
    </SelectState>
  )
}

MultipleValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

export function MultipleDefaultValue (args) {
  return (
    <SelectState defaultValue={['one', 'three']}>
      <SelectCog multiple {...args}>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
        <option value='four'>Four</option>
        <option value='five'>Five</option>
        <option value='six'>Six</option>
      </SelectCog>
    </SelectState>
  )
}

MultipleDefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}
