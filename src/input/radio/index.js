/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import Input from '~/src/input'

export default class Radio extends Input {
  getInputClassName () {
    return 'radio'
  }

  getId () {
    return this.props.id
  }

  getInput () {
    const {
      name,
      value
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        required={this.getRequired()}
        disabled={this.getDisabled()}
        type='radio'
        className={this.getInputClassName()}
        ref={this.setRef}
      />
    )
  }
}

Radio.propTypes = {
  ...Input.propTypes,
  id: PropTypes.string.isRequired
}
