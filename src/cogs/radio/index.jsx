/**
 * Radio component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CheckCog } from '@modernpoacher/cogs/cogs'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from '@modernpoacher/cogs/common'

import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Field from './field/index.jsx'

export default class Radio extends CheckCog {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }

  handleChange = (value, checked) => {
    const {
      onChange = DEFAULT_HANDLE_CHANGE
    } = this.props

    onChange(value, checked)
  }

  handleClick = (value, checked) => {
    const {
      onClick = DEFAULT_HANDLE_CLICK
    } = this.props

    onClick(value, checked)
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
      required = false,
      disabled = false,
      readOnly = false
    } = this.props

    return (
      <Title
        id={id}
        title={title}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
      />
    )
  }

  renderDescription () {
    const {
      description
    } = this.props

    return (
      <Description
        description={description}
      />
    )
  }

  renderErrorMessage () {
    const {
      errorMessage
    } = this.props

    return (
      <ErrorMessage
        errorMessage={errorMessage}
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
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
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
        onChange={this.handleChange}
        onClick={this.handleClick}
        fieldRef={fieldRef}
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
        {this.renderErrorMessage()}
      </div>
    )
  }
}

Radio.propTypes = {
  ...CheckCog.propTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

Radio.defaultProps = {
  ...CheckCog.defaultProps
}
