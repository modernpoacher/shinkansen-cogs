/**
 * TextInput component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueInput } from 'shinkansen-cogs/components/input'

export default class TextInput extends ValueInput {
  getClassName () {
    return classnames(super.getClassName(), 'text')
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
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        type='text'
        ref={this.setInput}
      />
    )
  }
}

TextInput.propTypes = {
  ...ValueInput.propTypes
}

TextInput.defaultProps = {
  ...ValueInput.defaultProps,
  label: 'Text'
}
