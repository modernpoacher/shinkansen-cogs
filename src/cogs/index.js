/**
 * Cog component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import Title from 'shinkansen-cogs/components/title'
import Field from 'shinkansen-cogs/components/field'

function onChange () {
  /* */
}

function onClick () {
  /* */
}

export default class Cog extends Component {
  getTitle = () => this.title
  getField = () => this.input

  setTitle = (title) => !!(this.title = title) || delete this.title
  setField = (input) => !!(this.input = input) || delete this.input

  getClassName () {
    const {
      required,
      disabled,
      readOnly
    } = this.props

    return (required || disabled || readOnly)
      ? classNames('cog', { required, disabled, readOnly })
      : 'cog'
  }

  getId () {
    const {
      id,
      name
    } = this.props

    return id || name
  }

  shouldComponentUpdate (props) {
    return (
      (props.name !== this.props.name) ||
      (props.id !== this.props.id) ||
      (props.title !== this.props.title) ||
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
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      onChange
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
        ref={this.setField}
      />
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderTitle()}
        {this.renderField()}
      </div>
    )
  }
}

Cog.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

Cog.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
  onChange
}

export class ValueCog extends Cog {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.value !== this.props.value)
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
}

CheckCog.propTypes = {
  ...Cog.propTypes,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func
}

CheckCog.defaultProps = {
  ...Cog.defaultProps,
  onClick
}
