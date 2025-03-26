/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.Select.SelectProps} SelectProps
 */

/**
 *  SelectCog component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  ValueCog
} from '#cogs/cogs'

import Title from '#cogs/cogs/select/title'
import Description from '#cogs/cogs/select/description'
import ErrorMessage from '#cogs/cogs/select/error-message'
import Field from '#cogs/cogs/select/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 *  @extends {ValueCog<ValueProps & SelectProps>}
 */
export default class SelectCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }

  /**
   *  @param {SelectProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      defaultValue,
      multiple,
      children,
      ...superProps
    } = props

    return (
      /**
       *  `value` may be `string` or `string[]`
       */
      (value !== this.props.value) ||
      /**
       *  `defaultValue` may be `string` or `string[]`
       */
      (defaultValue !== this.props.defaultValue) ||
      super.shouldComponentUpdate(superProps) ||
      (multiple !== this.props.multiple) ||
      (children !== this.props.children)
    )
  }

  /**
   *  @param {string | string[]} [value]
   */
  handleChange = (value) => {
    const {
      onChange = DEFAULT_HANDLE_EVENT
    } = this.props

    onChange(value)
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
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      placeholder,
      multiple = false,
      fieldRef,
      children
    } = this.props

    return (
      <Field
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        multiple={multiple}
        onChange={this.handleChange}
        fieldRef={fieldRef}>
        {children}
      </Field>
    )
  }
}

SelectCog.propTypes = {
  ...ValueCog.propTypes,
  multiple: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}
