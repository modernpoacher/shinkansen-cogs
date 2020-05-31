/**
 * PasswordCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Title from 'shinkansen-cogs/components/title/password'
import Description from 'shinkansen-cogs/components/description/password'
import ErrorMessage from 'shinkansen-cogs/components/error-message/password'
import Field from 'shinkansen-cogs/components/field/password'

export default class PasswordCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }

  handleChange = (value) => {
    const {
      onChange,
      name
    } = this.props

    onChange(name, value)
  }

  renderTitle () {
    const id = this.getId()

    const {
      title,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <Title
        id={id}
        title={title}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        ref={this.setTitle}
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
        ref={this.setDescription}
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
        ref={this.setErrorMessage}
      />
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
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
        ref={this.setField}
      />
    )
  }
}

PasswordCog.propTypes = {
  ...ValueCog.propTypes
}

PasswordCog.defaultProps = {
  ...ValueCog.defaultProps
}
