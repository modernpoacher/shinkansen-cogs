/**
 * SelectField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ValueField } from 'shinkansen-cogs/components/field'

export default class SelectField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'select')
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
      children
    } = this.props

    const className = this.getClassName()

    return (
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        onChange={this.handleChange}
        className={className}
        ref={this.setField}>
        {children}
      </select>
    )
  }
}

SelectField.propTypes = {
  ...ValueField.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

SelectField.defaultProps = {
  ...ValueField.defaultProps
}
