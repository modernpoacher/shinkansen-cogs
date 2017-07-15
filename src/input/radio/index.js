/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Input from '~/src/input'

export default class Radio extends Input {
  getInputClassName () {
    return `${super.getInputClassName()} radio`
  }

  getId () {
    return this.props.id
  }

  getInput () {
    const {
      name,
      value,
      checked,
      required,
      disabled
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={required}
        disabled={disabled}
        className={this.getInputClassName()}
        type='radio'
        ref={this.setRef}
      />
    )
  }
}

Radio.propTypes = {
  ...Input.propTypes,
  id: PropTypes.string.isRequired
}
