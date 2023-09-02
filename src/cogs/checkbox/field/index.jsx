/**
 * CheckboxField component
 */
import React from 'react'
import classnames from 'classnames'

import { CheckField } from 'shinkansen-cogs/components/field'

export default class CheckboxField extends CheckField {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  render () {
    const {
      id,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      fieldRef
    } = this.props

    const className = this.getClassName()

    return (
      <input
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        onClick={this.handleClick}
        onChange={this.handleChange}
        className={className}
        type='checkbox'
        ref={fieldRef}
      />
    )
  }
}

CheckboxField.propTypes = {
  ...CheckField.propTypes
}

CheckboxField.defaultProps = {
  ...CheckField.defaultProps
}
