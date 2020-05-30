/**
 * EmailField component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueField } from 'shinkansen-cogs/components/field'

export default class EmailField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'email')
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
        type='email'
        ref={this.setField}
      />
    )
  }
}

EmailField.propTypes = {
  ...ValueField.propTypes
}

EmailField.defaultProps = {
  ...ValueField.defaultProps
}
