/**
 * CheckboxCog component
 */
import React from 'react'
import classnames from 'classnames'

import { CheckCog } from 'shinkansen-cogs/cog'
import Label from 'shinkansen-cogs/components/label/checkbox'
import Input from 'shinkansen-cogs/components/input/checkbox'

export default class CheckboxCog extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
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
      placeholder,
      onClick,
      onChange
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
        onClick={onClick}
        onChange={onChange}
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
  ...CheckCog.defaultProps,
  label: 'Checkbox Cog'
}
