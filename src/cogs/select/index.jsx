/**
 * SelectCog component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ValueCog } from 'shinkansen-cogs/cogs'

import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Field from './field/index.jsx'

export default class SelectCog extends ValueCog {
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.multiple !== this.props.multiple) ||
      (props.children !== this.props.children)
    )
  }

  getClassName () {
    return classnames(super.getClassName(), 'select')
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
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      multiple,
      fieldRef,
      children
    } = this.props

    return (
      <Field
        id={id}
        name={name}
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

SelectCog.defaultProps = {
  ...ValueCog.defaultProps,
  multiple: false
}
