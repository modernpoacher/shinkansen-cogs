/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 *  @typedef {CogsTypes.Cogs.Radio.RadioProps} RadioProps
 */

/**
 *  Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  CheckCog
} from '#cogs/cogs'

import Title from '#cogs/cogs/radio/title'
import Description from '#cogs/cogs/radio/description'
import ErrorMessage from '#cogs/cogs/radio/error-message'
import Field from '#cogs/cogs/radio/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {CheckCog<CheckProps & RadioProps>}
 */
export default class Radio extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  /**
   *  @param {string} name
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
   *  @param {string} name
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

Radio.propTypes = {
  ...CheckCog.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
