/**
 * EmailCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from '@modernpoacher/cogs/cogs'

import {
  DEFAULT_HANDLE_CHANGE
} from '@modernpoacher/cogs/common'

import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Field from './field/index.jsx'

export default class EmailCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }

  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
    } = this.props

    onChange(value)
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

EmailCog.propTypes = {
  ...ValueCog.propTypes
}

EmailCog.defaultProps = {
  ...ValueCog.defaultProps
}
