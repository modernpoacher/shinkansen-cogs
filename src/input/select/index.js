/**
 * Select component
 */
import React from 'react'
import Input from '~/src/input'

export default class Select extends Input {
  getInputClassName () {
    return `${super.getInputClassName()} select`
  }

  getInput () {
    const {
      name,
      value,
      required,
      disabled
    } = this.props

    return (
      <select
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}
