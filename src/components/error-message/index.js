/**
 * ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from 'shinkansen-cogs/components/common/text-content'

export default class ErrorMessage extends Component {
  hasTextContent () {
    const { errorMessage } = this.props

    return !!errorMessage
  }

  getTextContent () {
    const { errorMessage } = this.props

    return errorMessage
  }

  getClassName () {
    return 'error-message'
  }

  shouldComponentUpdate (props) {
    return (
      (props.errorMessage !== this.props.errorMessage)
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

  render () {
    const { errorMessage } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          {this.renderTextContent()}
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
}
