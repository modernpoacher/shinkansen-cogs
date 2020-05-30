/**
 * CheckboxCog component
 */
import React from 'react'
import classnames from 'classnames'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Label from 'shinkansen-cogs/components/label/checkbox'
import Input from 'shinkansen-cogs/components/input/checkbox'

export default class CheckboxCog extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
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

CheckboxCog.propTypes = {
  ...CheckCog.propTypes
}

CheckboxCog.defaultProps = {
  ...CheckCog.defaultProps
}
