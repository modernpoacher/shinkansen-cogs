/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.Email.EmailProps} EmailProps
 */

/**
 *  EmailCog component
 */
import React from 'react'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'

import Title from '#cogs/cogs/email/title'
import Description from '#cogs/cogs/email/description'
import ErrorMessage from '#cogs/cogs/email/error-message'
import Field from '#cogs/cogs/email/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {ValueCog<ValueProps & EmailProps>}
 */
export default class EmailCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   */
  handleChange = (name, value) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(name, value)
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
      defaultValue,
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
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        fieldRef={fieldRef}
      />
    )
  }
}
