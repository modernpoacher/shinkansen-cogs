/**
 * TextField component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueField } from '@modernpoacher/cogs/components/field'

export default class TextField extends ValueField {
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
        type='text'
        ref={this.setField}
      />
    )
  }
}

TextField.propTypes = {
  ...ValueField.propTypes
}

TextField.defaultProps = {
  ...ValueField.defaultProps
}
