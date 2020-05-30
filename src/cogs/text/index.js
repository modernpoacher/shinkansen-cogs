/**
 * TextCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Title from 'shinkansen-cogs/components/title/text'
import Field from 'shinkansen-cogs/components/field/text'

export default class TextCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }

  handleChange = (value) => {
    const {
      onChange,
      name
    } = this.props

    onChange(name, value)
  }

  renderTitle () {
    const id = this.getId()

    const {
      title,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <Title
        id={id}
        title={title}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        ref={this.setTitle}
      />
    )
  }

  renderField () {
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
      placeholder
    } = this.props

    return (
      <Field
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
        onChange={this.handleChange}
        ref={this.setField}
      />
    )
  }
}

TextCog.propTypes = {
  ...ValueCog.propTypes
}

TextCog.defaultProps = {
  ...ValueCog.defaultProps
}
