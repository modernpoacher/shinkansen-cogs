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
  hasTextContent () {
    const { label } = this.props

    return !!label
  }

  getTextContent () {
    const { label } = this.props

    return label
  }

  isRequired () {
    const { required } = this.props

    return required
  }

  isDisabled () {
    const { disabled } = this.props

    return disabled
  }

  isReadOnly () {
    const { readOnly } = this.props

    return readOnly
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
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent textContent={textContent} />
      )
    }

    return null
  }

  renderIsRequired () {
    if (this.isRequired()) {
      return (
        <Required />
      )
    }

    return null
  }

  renderIsDisabled () {
    if (this.isDisabled()) {
      return (
        <Disabled />
      )
    }

    return null
  }

  renderIsReadOnly () {
    if (this.isReadOnly()) {
      return (
        <ReadOnly />
      )
    }

    return null
  }

  render () {
    const { label } = this.props

    if (label) {
      const { id } = this.props

      return (
        <label htmlFor={id} className={this.getClassName()}>
          {this.renderTextContent()}
        </label>
      )
    }

    return null
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
  required: false,
  disabled: false,
  readOnly: false
}
