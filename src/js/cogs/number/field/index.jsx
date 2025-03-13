/**
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.Number.NumberProps} NumberProps
 */

/**
 *  NumberField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  ValueField,
  toInputValue
} from '#cogs/components/field'

/**
 *  @extends {ValueField<ValueProps & NumberProps>}
 */
export default class NumberField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  render () {
    const {
      name,
      id,
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    const className = this.getClassName()

    if (defaultValue === undefined) {
      const {
        value
      } = this.props

      return (
        <input
          name={name}
          id={id}
          value={toInputValue(value)}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          accessKey={accessKey}
          placeholder={placeholder}
          onChange={this.handleChange}
          className={className}
          type='number'
          ref={fieldRef}
        />
      )
    }

    return (
      <input
        name={name}
        id={id}
        defaultValue={String(defaultValue)}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        type='number'
        ref={fieldRef}
      />
    )
  }
}

NumberField.propTypes = {
  ...ValueField.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
