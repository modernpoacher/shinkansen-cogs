/**
 * TextareaInput component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueInput } from 'shinkansen-cogs/components/input'

export default class TextareaInput extends ValueInput {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
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
      <textarea
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
        ref={this.setInput}
      />
    )
  }
}

TextareaInput.propTypes = {
  ...ValueInput.propTypes
}

TextareaInput.defaultProps = {
  ...ValueInput.defaultProps,
  label: 'Textarea'
}
