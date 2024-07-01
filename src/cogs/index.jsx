/**
 * Cog component
 *
 * @typedef {import('shinkansen-cogs/cogs').CogProps} CogProps
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  DEFAULT_HANDLE_CHANGE,
  DEFAULT_HANDLE_CLICK
} from 'shinkansen-cogs/common'

import Title from 'shinkansen-cogs/components/title'
import Description from 'shinkansen-cogs/components/description'
import ErrorMessage from 'shinkansen-cogs/components/error-message'
import Field, {
  ValueField,
  CheckField
} from 'shinkansen-cogs/components/field'

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
   * @param {CogProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.name !== this.props.name) ||
      (props.id !== this.props.id) ||
      (props.title !== this.props.title) ||
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
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
      fieldRef
    } = this.props

    return (
      <Field
        id={id}
        name={name}
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
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  }),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  fieldRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

Cog.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  onChange: DEFAULT_HANDLE_CHANGE
}

export class ValueCog extends Cog {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
      fieldRef
    } = this.props

    return (
      <ValueField
        id={id}
        name={name}
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
}

ValueCog.propTypes = {
  ...Cog.propTypes,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}

ValueCog.defaultProps = {
  ...Cog.defaultProps
}

export class CheckCog extends Cog {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.checked !== this.props.checked) ||
      (props.onClick !== this.props.onClick)
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      onChange = DEFAULT_HANDLE_CHANGE,
      onClick = DEFAULT_HANDLE_CLICK,
      fieldRef
    } = this.props

    return (
      <CheckField
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        fieldRef={fieldRef}
      />
    )
  }
}

CheckCog.propTypes = {
  ...Cog.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}

CheckCog.defaultProps = {
  ...Cog.defaultProps,
  onClick: DEFAULT_HANDLE_CLICK
}
