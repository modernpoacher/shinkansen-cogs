/**
 * Input component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  getDOMNode = () => this.domNode
  setDOMNode = (domNode) => !!(this.domNode = domNode) || delete this.domNode

  getClassName () {
    return 'input'
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly) ||
      (props.tabIndex !== this.props.tabIndex) ||
      (props.accessKey !== this.props.accessKey) ||
      (props.placeholder !== this.props.placeholder) ||
      (props.onChange !== this.props.onChange)
    )
  }

  render () {
    const {
      id,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
    } = this.props

    return (
      <input
        id={id}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        className={this.getClassName()}
        ref={this.setDOMNode}
      />
    )
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  accessKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  label: 'Input',
  required: false,
  disabled: false,
  readOnly: false,
  onChange: () => {}
}

/**
 * CheckInput component
 */
export class CheckInput extends Input {
  getValue () {
    return this.getDOMNode()
      .checked
  }

  setValue (checked) {
    this.getDOMNode()
      .checked = checked
  }

  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checked !== this.props.checked) ||
      (props.onClick !== this.props.onClick)
    )
  }

  handleClick = ({ target: { checked } }) => {
    const { onClick } = this.props

    onClick(checked)
  }

  handleChange = ({ target: { checked } }) => {
    const { onChange } = this.props

    onChange(checked)
  }
}

CheckInput.propTypes = {
  ...Input.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}

CheckInput.defaultProps = {
  ...Input.defaultProps
}

/**
 * ValueInput component
 */
export class ValueInput extends Input {
  getValue () {
    return this.getInput()
      .value
  }

  setValue (value) {
    this.getInput()
      .value = value
  }

  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props

    onChange(value)
  }
}

ValueInput.propTypes = {
  ...Input.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

ValueInput.defaultProps = {
  ...Input.defaultProps
}
