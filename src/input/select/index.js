/**
 * Select component
 */
import React from 'react'
import Input from '~/src/input'

export default class Select extends Input {
  getLabelClassName () {
    return `${super.getLabelClassName()} select`
  }

  getInputClassName () {
    return `${super.getInputClassName()} select`
  }

  renderInput () {
    const {
      name,
      value,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <select
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}
