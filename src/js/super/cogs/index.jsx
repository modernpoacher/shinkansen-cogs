/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Super.Cogs.CogProps} CogProps
 */

/**
 *  Cog component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from '#cogs/super/components/title'
import Description from '#cogs/super/components/description'
import ErrorMessage from '#cogs/super/components/error-message'
import Field from '#cogs/super/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

export default class Cog extends Component {
  getClassName () {
    const {
      required = false,
      disabled = false,
      readOnly = false,
      errorMessage
    } = this.props

    return classnames('cog', { required, disabled, readOnly, error: !!errorMessage })
  }

  getId () {
    const {
      id,
      name
    } = this.props

    return id || name
  }

  /**
   *  @param {CogProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.name !== this.props.name) ||
      (props.id !== this.props.id) ||
      (props.title !== this.props.title) ||
      (props.value !== this.props.value) ||
      (props.description !== this.props.description) ||
      (props.errorMessage !== this.props.errorMessage) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly) ||
      (props.tabIndex !== this.props.tabIndex) ||
      (props.accessKey !== this.props.accessKey) ||
      (props.placeholder !== this.props.placeholder) ||
      (props.onChange !== this.props.onChange)
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
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_EVENT,
      fieldRef
    } = this.props

    return (
      <Field
        name={name}
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={onChange}
        fieldRef={fieldRef}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderErrorMessage()}
        {this.renderField()}
      </div>
    )
  }
}

Cog.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape({}).isRequired,
    uri: PropTypes.string.isRequired
  }),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  accessKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string
    })
  })
}
