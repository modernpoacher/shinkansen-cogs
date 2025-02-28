/**
 *  @typedef {CogsTypes.Cogs.Cog.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.Cog.Textarea.TextareaProps} TextareaProps
 */

/**
 * TextareaCog component
 */
import React from 'react'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'

import {
  DEFAULT_HANDLE_CHANGE
} from '#cogs/common'

import Title from '#cogs/cogs/textarea/title'
import Description from '#cogs/cogs/textarea/description'
import ErrorMessage from '#cogs/cogs/textarea/error-message'
import Field from '#cogs/cogs/textarea/field'

/**
 *  @extends {ValueCog<ValueProps & TextareaProps>}
 */
export default class TextareaCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   */
  handleChange = (name, value) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
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
