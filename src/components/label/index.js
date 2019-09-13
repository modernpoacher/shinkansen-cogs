/**
 * Label component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-cogs/components/common/text-content'
import Required from 'shinkansen-cogs/components/common/required'
import Disabled from 'shinkansen-cogs/components/common/disabled'
import ReadOnly from 'shinkansen-cogs/components/common/readonly'

export default class Label extends Component {
  textContent () {
    return this.props.label
  }

  getClassName () {
    return 'label'
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.label !== this.props.label) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly)
    )
  }

  renderTextContent () {
    const { label } = this.props

    if (label) {
      return (
        <TextContent textContent={label} />
      )
    }
  }

  renderIsRequired () {
    const { required } = this.props

    if (required) {
      return (
        <Required />
      )
    }
  }

  renderIsDisabled () {
    const { disabled } = this.props

    if (disabled) {
      return (
        <Disabled />
      )
    }
  }

  renderIsReadOnly () {
    const { readOnly } = this.props

    if (readOnly) {
      return (
        <ReadOnly />
      )
    }
  }

  render () {
    const { id, children } = this.props

    return (
      <label htmlFor={id} className={this.getClassName()}>
        {this.renderTextContent()}
        {this.renderIsRequired()}
        {this.renderIsDisabled()}
        {this.renderIsReadOnly()}
        {children}
      </label>
    )
  }
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}

Label.defaultProps = {
  label: 'Label',
  required: false,
  disabled: false,
  readOnly: false
}
