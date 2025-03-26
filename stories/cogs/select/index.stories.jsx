/**
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 */

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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <SelectState value='one'>
        <SelectCog {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectCog>
      </SelectState>
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
  id: 'select',
  name: 'select'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <SelectState defaultValue='one'>
        <SelectCog {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectCog>
      </SelectState>
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
  id: 'select',
  name: 'select'
}

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleValue (args) {
  return (
    <form>
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
    </form>
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

/**
 *  @param {ValueProps} args
 *  @returns {React.JSX.Element}
 */
export function MultipleDefaultValue (args) {
  return (
    <form>
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
    </form>
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
