/**
 * TextareaField component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueField } from '@modernpoacher/cogs/components/field'

export default class TextareaField extends ValueField {
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
      tabIndex,
      accessKey,
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
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        ref={this.setField}
      />
    )
  }
}

TextareaField.propTypes = {
  ...ValueField.propTypes
}

TextareaField.defaultProps = {
  ...ValueField.defaultProps
}
