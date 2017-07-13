/**
 * Radio component
 */
import React from 'react'
import Input from '~/src/input'

export default class Radio extends Input {
  getInputClassName () {
    return 'radio'
  }

  getLabel () {
    const {
      id,
      label
    } = this.props

    return (
      <label htmlFor={id} className={this.getLabelClassName()}>
        {label}
        {this.getRequired()}
      </label>
    )
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
      <input
        id={id}
        name={name}
        defaultValue={value}
        required={required}
        defaultChecked={checked}
        type='radio'
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}

Radio.propTypes = {
  ...Input.propTypes,
  id: React.PropTypes.string.isRequired
}
