/**
 *  @typedef {CogsTypes.Cogs.Cog.CheckProps} CheckProps
 *  @typedef {CogsTypes.Cogs.Cog.Checkbox.CheckboxProps} CheckboxProps
 */

/**
 * CheckboxCog component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  CheckCog
} from '#cogs/cogs'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '#cogs/common'

import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Field from './field/index.jsx'

/**
 *  @extends {CheckCog<CheckProps & CheckboxProps>}
 */
export default class CheckboxCog extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }

  /**
   *  @param {CheckProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) ||
      (value !== this.props.value)
    )
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleChange = (name, value, checked) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
    } = this.props

    onChange(name, value, checked)
  }

  /**
   *  @param {string} name
   *  @param {string | string[]} [value]
   *  @param {boolean} [checked]
   */
  handleClick = (name, value, checked) => {
    const {
      onClick = DEFAULT_HANDLE_CLICK
    } = this.props

    onClick(name, value, checked)
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
        id={id}
        name={name}
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

CheckboxCog.propTypes = {
  ...CheckCog.propTypes,
  value: PropTypes.string.isRequired
}
