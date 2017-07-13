/**
 * Checkbox component
 */
import React from 'react'
import Input from '~/src/input'

export default class Checkbox extends Input {
  getInputClassName () {
    return 'checkbox'
  }

  getValue () {
    return this.input.checked
  }

  getInput () {
    const {
      id,
      name,
      value,
      required,
      checked
    } = this.props

    return (
      <div className='checkbox-shell'>
        <input
          id={id || name}
          name={name}
          defaultValue={value}
          required={required}
          defaultChecked={checked}
          className={this.getInputClassName()}
          type='checkbox'
          ref={this.setRef}
        />
      </div>
    )
  }
}
