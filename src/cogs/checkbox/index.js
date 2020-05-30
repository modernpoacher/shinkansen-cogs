/**
 * CheckboxCog component
 */
import React from 'react'
import classnames from 'classnames'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Title from 'shinkansen-cogs/components/title/checkbox'
import Description from 'shinkansen-cogs/components/description/checkbox'
import Field from 'shinkansen-cogs/components/field/checkbox'

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

  renderDescription () {
    const id = this.getId()

    const {
      description
    } = this.props

    return (
      <Description
        id={id}
        description={description}
        ref={this.setDescription}
      />
    )
  }

  renderField () {
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
      <Field
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
        ref={this.setField}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderField()}
        {this.renderTitle()}
        {this.renderDescription()}
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
