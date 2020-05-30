/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Title from 'shinkansen-cogs/components/title/radio'
import Field from 'shinkansen-cogs/components/field/radio'

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
