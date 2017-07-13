/**
 * Input component
 */
import React, { Component } from 'react'
import classNames from 'src/classNames'

export default class Input extends Component {
  state = {}

  getRef = () => this.input
  setRef = (ref) => {
    this.input = ref
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
    return 'label'
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
      id,
      name,
      label,
      required
    } = this.props

    return (
      <label htmlFor={id || name} className={this.getLabelClassName()}>
        <span>{label}</span>
        {(required) ? <span className='required'>&nbsp;*</span> : false}
      </label>
    )
  }

  getInput () {
    const {
      id,
      name,
      value,
      required
    } = this.props

    return (
      <input
        id={id || name}
        name={name}
        defaultValue={value}
        required={required}
        className={this.getInputClassName()}
        type='text'
        placeholder={this.getPlaceholder()}
        ref={this.setRef}
      />
    )
  }

  getPlaceholder () {
    const { placeholder } = this.props

    if (placeholder) {
      return placeholder
    }
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.label !== this.props.label) ||
      (props.value !== this.props.value) ||
      (props.required !== this.props.required) ||
      (props.placeholder !== this.props.placeholder) ||
      (props.description !== this.props.description)
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
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  required: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  description: React.PropTypes.string,
  validator: React.PropTypes.func
}

Input.defaultProps = {
  label: String.fromCharCode(32),
  value: '',
  required: false,
  placeholder: '',
  description: '',
  validator: () => null
}
