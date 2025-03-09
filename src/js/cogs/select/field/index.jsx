/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Components.Field.ValueProps} ValueProps
 *  @typedef {CogsTypes.Components.Field.Select.SelectProps} SelectProps
 */

/**
 *  SelectField component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import equal from 'fast-deep-equal'

import {
  ValueField
} from '#cogs/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

/**
 * @param {HTMLOptionElement[]} selectedOptions
 * @returns {string[]}
 */
function fromSelectedOptions (selectedOptions) {
  return (
    Array.from(selectedOptions)
      .map(({ value, text }) => (value || text) ?? '')
  )
}

/**
 * @param {{ current?: { selectedOptions: HTMLOptionElement[] } }} fieldRef
 * @returns {string[] | undefined}
 */
function getCurrentValues ({ current }) {
  return (
    current
      ? fromSelectedOptions(current.selectedOptions)
      : undefined
  )
}

/**
 * @param {{ current?: { value: string } }} fieldRef
 * @returns {string | undefined}
 */
function getCurrentValue ({ current }) {
  return (
    current
      ? current.value
      : undefined
  )
}

/**
 *  @param {{ target: { selectedOptions: HTMLOptionElement[] } }} event
 *  @returns {string[]}
 */
function getSelectedValues ({ target: { selectedOptions } }) {
  return (
    fromSelectedOptions(selectedOptions)
  )
}

/**
 *  @param {{ target: { value?: string } }} event
 *  @returns {string}
 */
function getSelectedValue ({ target: { value } }) {
  return value ?? ''
}

/**
 *  @extends {ValueField<ValueProps & SelectProps>}
 */
export default class SelectField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }

  /**
   *  @param {SelectProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      multiple,
      children,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) || // , state ||
      (multiple !== this.props.multiple) ||
      (children !== this.props.children)
    )
  }

  /**
   *  @returns {void}
   */
  handleFieldRef = () => {
    const {
      fieldRef,
      multiple,
      defaultValue,
      value = defaultValue
    } = this.props

    if (multiple) {
      const currentValues = getCurrentValues(fieldRef)

      if (!equal(value, currentValues)) {
        const {
          onChange = DEFAULT_HANDLE_EVENT,
          name
        } = this.props

        onChange(name, currentValues)
      }
    } else {
      const currentValue = getCurrentValue(fieldRef)

      if (value !== currentValue) {
        const {
          onChange = DEFAULT_HANDLE_EVENT,
          name
        } = this.props

        onChange(name, currentValue)
      }
    }
  }

  /**
   *  @overload
   *  @param {{ target: { selectedOptions: { value?: string, text?: string }[] } }} event
   *  @returns {void}
   *
   *  @overload
   *  @param {{ target: { value?: string } }} event
   *  @returns {void}
   *
   *  @param {any} event
   *  @returns {void}
   */
  handleChange = (event) => {
    const {
      multiple = false,
      onChange = DEFAULT_HANDLE_EVENT,
      name
    } = this.props

    if (multiple) {
      onChange(name, getSelectedValues(event))
    } else {
      onChange(name, getSelectedValue(event))
    }
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required = false,
      disabled = false,
      readOnly = false,
      tabIndex,
      accessKey,
      multiple = false,
      children,
      fieldRef
    } = this.props

    const className = this.getClassName()

    return (
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled} // @ts-ignore
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        multiple={multiple}
        onChange={this.handleChange}
        className={className}
        ref={fieldRef}>
        {children}
      </select>
    )
  }
}

SelectField.propTypes = {
  ...ValueField.propTypes,
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
