/**
 * NumberCog component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cog'
import Label from 'shinkansen-cogs/components/label/number'
import Input from 'shinkansen-cogs/components/input/number'

export default class NumberCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  renderLabel () {
    const id = this.getId()

    const {
      label,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <Label
        id={id}
        label={label}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        ref={this.setLabel}
      />
    )
  }

  renderInput () {
    const id = this.getId()

    const {
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      placeholder,
      onChange
    } = this.props

    return (
      <Input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
        ref={this.setInput}
      />
    )
  }
}

NumberCog.propTypes = {
  ...ValueCog.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

NumberCog.defaultProps = {
  ...ValueCog.defaultProps,
  label: 'Number'
}
