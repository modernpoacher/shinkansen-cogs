/**
 * RadioInput component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { CheckInput } from 'shinkansen-cogs/components/input'

export default class RadioInput extends CheckInput {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  handleClick = ({ target: { value } }) => {
    const { onClick } = this.props

    onClick(value)
  }

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props

    onChange(value)
  }

  render () {
    const {
      id,
      name,
      value,
      checked,
      defaultChecked,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey
    } = this.props

    const className = this.getClassName()

    return (
      <input
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
        onClick={this.handleClick}
        onChange={this.handleChange}
        className={className}
        type='radio'
        ref={this.setDOMNode}
      />
    )
  }
}

RadioInput.propTypes = {
  ...CheckInput.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

RadioInput.defaultProps = {
  ...CheckInput.defaultProps
}
