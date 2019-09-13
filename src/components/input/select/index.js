/**
 * SelectInput component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ValueInput } from 'shinkansen-cogs/components/input'

export default class SelectInput extends ValueInput {
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
        ref={this.setInput}>
        {children}
      </select>
    )
  }
}

SelectInput.propTypes = {
  ...ValueInput.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

SelectInput.defaultProps = {
  ...ValueInput.defaultProps
}
