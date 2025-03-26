/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 *  @typedef {CogsTypes.Cogs.Checkbox.CheckboxProps} CheckboxProps
 */

/**
 *  CheckboxCog component
 */
import React from 'react'
import classnames from 'classnames'

import {
  CheckCog
} from '#cogs/cogs'

import Title from '#cogs/cogs/checkbox/title'
import Description from '#cogs/cogs/checkbox/description'
import ErrorMessage from '#cogs/cogs/checkbox/error-message'
import Field from '#cogs/cogs/checkbox/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {CheckCog<CheckProps & CheckboxProps>}
 */
export default class CheckboxCog extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  /**
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleChange = (value, checked) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(value, checked)
  }

  /**
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleClick = (value, checked) => {
    const {
      onClick = DEFAULT_HANDLE_EVENT
    } = this.props

    onClick(value, checked)
  }

  renderTitle () {
    const id = this.getId()

    const {
      title,
      required = false,
      disabled = false,
      readOnly = false
    } = this.props

    return (
      <Title
        id={id}
        title={title}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
      />
    )
  }

  renderDescription () {
    const {
      description
    } = this.props

    return (
      <Description
        description={description}
      />
    )
  }

  renderErrorMessage () {
    const {
      errorMessage
    } = this.props

    return (
      <ErrorMessage
        errorMessage={errorMessage}
      />
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      checked,
      defaultChecked,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <Field
        name={name}
        id={id}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        onClick={this.handleClick}
        fieldRef={fieldRef}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderField()}
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderErrorMessage()}
      </div>
    )
  }
}
