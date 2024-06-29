/**
 * CheckboxField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckField } from '@modernpoacher/cogs/components/field'

export default class CheckboxField extends CheckField {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  render () {
    const {
      checked,
      id,
      name,
      value,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      fieldRef
    } = this.props

    const className = this.getClassName()

    if (typeof checked === 'boolean') {
      return (
        <input
          checked={checked}
          id={id}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          accessKey={accessKey}
          onChange={this.handleChange}
          onClick={this.handleClick}
          className={className}
          type='checkbox'
          ref={fieldRef}
        />
      )
    }

    const {
      defaultChecked
    } = this.props

    return (
      <input
        defaultChecked={defaultChecked}
        id={id}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        onChange={this.handleChange}
        onClick={this.handleClick}
        className={className}
        type='checkbox'
        ref={fieldRef}
      />
    )
  }
}

CheckboxField.propTypes = {
  ...CheckField.propTypes,
  value: PropTypes.string.isRequired
}

CheckboxField.defaultProps = {
  ...CheckField.defaultProps
}
