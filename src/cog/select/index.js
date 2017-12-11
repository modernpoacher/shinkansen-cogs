/**
 * SelectCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cog'
import Label from 'shinkansen-cogs/components/label/select'
import Input from 'shinkansen-cogs/components/input/select'

export default class SelectCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), ' select')
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
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      onChange,
      children
    } = this.props

    return (
      <Input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={onChange}
        ref={this.setInput}>
        {children}
      </Input>
    )
  }
}

SelectCog.propTypes = {
  ...ValueCog.propTypes
}

SelectCog.defaultProps = {
  ...ValueCog.defaultProps,
  label: 'Select'
}
