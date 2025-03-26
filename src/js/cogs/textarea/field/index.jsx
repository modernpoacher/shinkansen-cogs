/**
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.Textarea.TextareaProps} TextareaProps
 */

/**
 * TextareaField component
 */
import React from 'react'
import classnames from 'classnames'

import {
  ValueField,
  toInputValue
} from '#cogs/components/field'

/**
 *  @extends {ValueField<ValueProps & TextareaProps>}
 */
export default class TextareaField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
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
        <textarea
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
          ref={fieldRef}
        />
      )
    }

    return (
      <textarea
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
        ref={fieldRef}
      />
    )
  }
}
