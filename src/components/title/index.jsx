/**
 * Title component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-cogs/components/common/text-content'
import Required from 'shinkansen-cogs/components/common/required'
import Disabled from 'shinkansen-cogs/components/common/disabled'
import ReadOnly from 'shinkansen-cogs/components/common/readonly'

export default class Title extends Component {
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
    return 'title'
  }

  shouldComponentUpdate (props) {
    return (
      (props.id !== this.props.id) ||
      (props.title !== this.props.title) ||
      (props.required !== this.props.required) ||
      (props.disabled !== this.props.disabled) ||
      (props.readOnly !== this.props.readOnly)
    )
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
    const { title } = this.props

    if (title) {
      const { id } = this.props

      return (
        <label htmlFor={id} className={this.getClassName()}>
          <TextContent textContent={title} />
        </label>
      )
    }

    return null
  }
}

Title.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

Title.defaultProps = {
  required: false,
  disabled: false,
  readOnly: false
}
