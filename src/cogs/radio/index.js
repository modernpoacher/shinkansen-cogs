/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Label from 'shinkansen-cogs/components/label/radio'
import Input from 'shinkansen-cogs/components/input/radio'

export default class Radio extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  handleClick = (value) => {
    const {
      onClick,
      name
    } = this.props

    onClick(name, value)
  }

  handleChange = (value) => {
    const {
      onChange,
      name
    } = this.props

    onChange(name, value)
  }

  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }

  renderLabel () {
    const id = this.getId()

    const {
      label,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <Label
        id={id}
        label={label}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        ref={this.setLabel}
      />
    )
  }

  renderInput () {
    const id = this.getId()

    const {
      name,
      value,
      checked,
      defaultChecked,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
    } = this.props

    return (
      <Input
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
        onClick={this.handleClick}
        onChange={this.handleChange}
        ref={this.setInput}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderInput()}
        {this.renderLabel()}
      </div>
    )
  }
}

Radio.propTypes = {
  ...CheckCog.propTypes,
  value: PropTypes.string.isRequired
}

Radio.defaultProps = {
  ...CheckCog.defaultProps
}
