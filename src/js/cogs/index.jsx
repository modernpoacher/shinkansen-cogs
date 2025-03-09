/**
 *  @typedef {CogsTypes.OnEventType} OnEventType
 *  @typedef {CogsTypes.Super.Cogs.CogProps} CogProps
 *  @typedef {CogsTypes.Cogs.ValueProps} ValueProps
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 */

/**
 *  Cog component
 */
import React from 'react'
import PropTypes from 'prop-types'

import Cog from '#cogs/super/cogs'

import {
  ValueField,
  CheckField
} from '#cogs/components/field'

/**
 *  @type {OnEventType}
 */
function DEFAULT_HANDLE_EVENT () {
  //
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
      super.shouldComponentUpdate(superProps) ||
      (value !== this.props.value) ||
      (defaultValue !== this.props.defaultValue)
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
      onChange = DEFAULT_HANDLE_EVENT,
      fieldRef = React.createRef()
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
      super.shouldComponentUpdate(superProps) ||
      (checked !== this.props.checked) ||
      (defaultChecked !== this.props.defaultChecked) ||
      (onClick !== this.props.onClick)
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
      onChange = DEFAULT_HANDLE_EVENT,
      onClick = DEFAULT_HANDLE_EVENT,
      fieldRef = React.createRef()
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
