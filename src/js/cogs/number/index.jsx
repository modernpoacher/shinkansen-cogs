/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.Number.NumberProps} NumberProps
 */

/**
 *  NumberCog component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'

import Title from '#cogs/cogs/number/title'
import Description from '#cogs/cogs/number/description'
import ErrorMessage from '#cogs/cogs/number/error-message'
import Field from '#cogs/cogs/number/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {ValueCog<ValueProps & NumberProps>}
 */
export default class NumberCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }

  /**
   *  @param {string | string[]} [value]
   */
  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
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

NumberCog.propTypes = {
  ...ValueCog.propTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
