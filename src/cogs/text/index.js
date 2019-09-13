/**
 * TextCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Label from 'shinkansen-cogs/components/label/text'
import Input from 'shinkansen-cogs/components/input/text'

export default class TextCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'text')
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

TextCog.propTypes = {
  ...ValueCog.propTypes
}

TextCog.defaultProps = {
  ...ValueCog.defaultProps,
  label: 'Text Cog'
}
