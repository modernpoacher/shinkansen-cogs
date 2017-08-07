/**
 * Input component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

export default class Input extends Component {
  state = {}

  getInput = () => this.input
  setInput = (input) => {
    if (input) {
      this.input = input
    } else {
      delete this.input
    }
  }

  getValue () {
    return this.getInput()
      .value
  }

  setValue (value) {
    this.getInput()
      .value = value
  }

  hasError () {
    const { error } = this.state

    return !!error
  }

  validate = () => {
    const { validator } = this.props
    const value = this.getValue()
    const error = validator(value)

    this.setState({ error })
    return (error === null)
  }

  getLabelClassName () {
    return 'label'
  }

  getInputClassName () {
    return 'input'
  }

  getClassName () {
    const {
      required,
      disabled,
      readOnly
    } = this.props

    const className = (required || disabled || readOnly)
      ? `cog ${classNames({ required, disabled, readOnly })}`
      : 'cog'

    return this.hasError()
      ? `${className} error`
      : className
  }

  getId () {
    const {
      id,
      name
    } = this.props

    return id || name
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.label !== this.props.label) ||
      (props.value !== this.props.value) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly) ||
      (props.placeholder !== this.props.placeholder)
    )
  }

  handleChange = () => {
    this.validate()

    const { onChange } = this.props

    onChange(
      this.getValue()
    )
  }

  renderLabelTextContent () {
    const { label } = this.props

    if (label) {
      return (
        <span className='text-content'>
          {label}
        </span>
      )
    }
  }

  renderIsRequired () {
    const { required } = this.props

    if (required) {
      return (
        <span className='is-required'>
          {String.fromCharCode(42)}
        </span>
      )
    }
  }

  renderIsDisabled () {
    const { disabled } = this.props

    if (disabled) {
      return (
        <span className='is-disabled'>
          {String.fromCharCode(42)}
        </span>
      )
    }
  }

  renderIsReadOnly () {
    const { readOnly } = this.props

    if (readOnly) {
      return (
        <span className='is-readonly'>
          {String.fromCharCode(42)}
        </span>
      )
    }
  }

  renderError () {
    const { error } = this.state

    if (error) {
      return (
        <p className='error-text'>
          {error}
        </p>
      )
    }
  }

  renderLabel () {
    return (
      <label htmlFor={this.getId()} className={this.getLabelClassName()}>
        {this.renderLabelTextContent()}
        {this.renderIsRequired()}
        {this.renderIsDisabled()}
        {this.renderIsReadOnly()}
      </label>
    )
  }

  renderInput () {
    const {
      name,
      value,
      required,
      disabled,
      readOnly,
      placeholder
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        className={this.getInputClassName()}
        type='text'
        ref={this.setInput}
      />
    )
  }

  render () {
    return (
      <div className={this.getClassName()} onChange={this.handleChange}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderError()}
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  validator: PropTypes.func,
  onChange: PropTypes.func
}

Input.defaultProps = {
  label: 'Input',
  required: false,
  disabled: false,
  readOnly: false,
  validator: () => null,
  onChange: () => true
}
