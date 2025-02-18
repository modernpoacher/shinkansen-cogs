/**
 *  @typedef {CogsTypes.Components.Field.CheckProps} CheckProps
 *  @typedef {CogsTypes.Components.Field.Radio.RadioProps} RadioProps
 */

/**
 * RadioField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  CheckField
} from '#cogs/components/field'

/**
 *  @extends {CheckField<CheckProps & RadioProps>}
 */
export default class RadioField extends CheckField {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
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
          type='radio'
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
        type='radio'
        ref={fieldRef}
      />
    )
  }
}

RadioField.propTypes = {
  ...CheckField.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
