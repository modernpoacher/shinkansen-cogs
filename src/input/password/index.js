/**
 * Password component
 */
import React from 'react'
import Input from '~/src/input'

export default class Password extends Input {
  getInputClassName () {
    return `${super.getInputClassName()} password`
  }

  getInput () {
    const {
      name,
      value,
      required,
      disabled,
      placeholder
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={this.getInputClassName()}
        type='password'
        ref={this.setRef}
      />
    )
  }
}
