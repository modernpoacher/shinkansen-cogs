/**
 * Select component
 */
import React from 'react'
import PropTypes from 'prop-types'
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
      readOnly,
      children
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
        ref={this.setInput}>
        {children}
      </select>
    )
  }
}

Select.propTypes = {
  ...Input.propTypes,
  children: PropTypes.element
}

Select.defaultProps = {
  ...Input.defaultProps,
  label: 'Select'
}
