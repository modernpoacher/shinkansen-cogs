/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Super.Cogs.CogProps} CogProps
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 */

/**
 *  ValueCog component
 *  CheckCog component
 */
import React from 'react'
import PropTypes from 'prop-types'

import Cog from '#cogs/super/cogs'

import {
  ValueField,
  CheckField,
  toInputValue
} from '#cogs/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
}

export {
  toInputValue
}

/**
 *  @extends {Cog<CogProps & ValueProps>}
 */
export class ValueCog extends Cog {
  /**
   *  @param {ValueProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      value,
      defaultValue,
      ...superProps
    } = props

    return (
      (value !== this.props.value) ||
      (defaultValue !== this.props.defaultValue) ||
      super.shouldComponentUpdate(superProps)
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
      <ValueField
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
}

ValueCog.propTypes = {
  ...Cog.propTypes,
  defaultValue: PropTypes.string
}

/**
 *  @extends {Cog<CogProps & CheckProps>}
 */
export class CheckCog extends Cog {
  /**
   *  @param {CheckProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      checked,
      defaultChecked,
      onClick,
      ...superProps
    } = props

    return (
      (checked !== this.props.checked) ||
      (defaultChecked !== this.props.defaultChecked) ||
      super.shouldComponentUpdate(superProps) ||
      (onClick !== this.props.onClick)
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
      onClick = DEFAULT_HANDLE_EVENT,
      fieldRef
    } = this.props

    return (
      <CheckField
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
