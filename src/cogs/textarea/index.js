/**
 * TextareaCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Label from 'shinkansen-cogs/components/label/textarea'
import Input from 'shinkansen-cogs/components/input/textarea'

export default class TextareaCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
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
      onChange
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
        ref={this.setInput}
      />
    )
  }
}

TextareaCog.propTypes = {
  ...ValueCog.propTypes
}

TextareaCog.defaultProps = {
  ...ValueCog.defaultProps,
  label: 'Textarea Cog'
}
