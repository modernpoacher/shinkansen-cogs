/**
 * SelectCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Title from 'shinkansen-cogs/components/title/select'
import Field from 'shinkansen-cogs/components/field/select'

export default class SelectCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'select')
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
      placeholder,
      children
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
        ref={this.setField}>
        {children}
      </Field>
    )
  }
}

SelectCog.propTypes = {
  ...ValueCog.propTypes
}

SelectCog.defaultProps = {
  ...ValueCog.defaultProps
}
