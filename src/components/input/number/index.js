/**
 * NumberInput component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ValueInput } from 'shinkansen-cogs/components/input'

export default class NumberInput extends ValueInput {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
    } = this.props

    const className = this.getClassName()

    return (
      <input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        type='number'
        ref={this.setInput}
      />
    )
  }
}

NumberInput.propTypes = {
  ...ValueInput.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

NumberInput.defaultProps = {
  ...ValueInput.defaultProps
}
