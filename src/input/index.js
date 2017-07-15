/**
 * Input component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  state = {}

  getRef = () => this.input
  setRef = (ref) => {
    if (ref) {
      this.input = ref
    } else {
      delete this.input
    }
  }

  validate = () => {
    const { validator } = this.props
    const value = this.getValue()
    const error = validator(value)

    this.setState({ error })
    return (error === null)
  }

  getError () {
    const { error } = this.state

    if (error) {
      return (
        <p>{error}</p>
      )
    }
  }

  getLabelClassName () {
    const {
      required
    } = this.props

    return (required)
      ? 'label required'
      : 'label'
  }

  getInputClassName () {
    return 'input'
  }

  getClassName () {
    return 'shinkansen-cogs'
  }

  getValue () {
    return this.input.value
  }

  getLabel () {
    const {
      label
    } = this.props

    return (
      <label htmlFor={this.getId()} className={this.getLabelClassName()}>
        <span className='text-content'>
          {label}
        </span>
      </label>
    )
  }

  getInput () {
    const {
      name,
      value,
      required,
      disabled,
      placeholder
    } = this.props

    return (
      <input
        id={this.getId()}
        name={name}
        defaultValue={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={this.getInputClassName()}
        type='text'
        ref={this.setRef}
      />
    )
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
      (props.placeholder !== this.props.placeholder)
    )
  }

  handleChange = () => this.validate()

  render () {
    return (
      <div className={this.getClassName()} onChange={this.handleChange}>
        {this.getLabel()}
        {this.getInput()}
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
  placeholder: PropTypes.string,
  description: PropTypes.string,
  validator: PropTypes.func
}

Input.defaultProps = {
  label: String.fromCharCode(32),
  value: '',
  required: false,
  disabled: false,
  placeholder: '',
  description: '',
  validator: () => null
}
