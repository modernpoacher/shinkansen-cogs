/**
 * PasswordCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'

import {
  DEFAULT_HANDLE_CHANGE
} from 'shinkansen-cogs/common'

import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Field from './field/index.jsx'

export default class PasswordCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }

  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE,
      name
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
        fieldRef={fieldRef}
      />
    )
  }
}

PasswordCog.propTypes = {
  ...ValueCog.propTypes
}
