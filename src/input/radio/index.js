/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Input from '~/src/input'

export default class Radio extends Input {
  getValue () {
    return this.getInput()
      .checked
  }

  setValue (checked) {
    this.getInput()
      .checked = checked
  }

  getLabelClassName () {
    return `${super.getLabelClassName()} radio`
  }

  getInputClassName () {
    return `${super.getInputClassName()} radio`
  }

  getId () {
    return this.props.id
  }

  renderInput () {
    const {
      name,
      value,
      checked,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={this.getInputClassName()}
        type='radio'
        ref={this.setInput}
      />
    )
  }
}

Radio.propTypes = {
  ...Input.propTypes,
  id: PropTypes.string.isRequired
}

Radio.defaultProps = {
  ...Input.defaultProps,
  label: 'Radio'
}
