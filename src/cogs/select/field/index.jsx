/**
 * SelectField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueField } from 'shinkansen-cogs/components/field'

export default class SelectField extends ValueField {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.children !== this.props.children)
    )
  }

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
      children,
      fieldRef
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
        ref={fieldRef}>
        {children}
      </select>
    )
  }
}

SelectField.propTypes = {
  ...ValueField.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

SelectField.defaultProps = {
  ...ValueField.defaultProps
}
