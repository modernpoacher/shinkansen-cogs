/**
 *  @typedef {CogsTypes.ErrorDefinitionType} ErrorDefinitionType
 *  @typedef {CogsTypes.Components.ErrorMessage.ErrorMessageProps} ErrorMessageProps
 *  @typedef {CogsTypes.Components.ErrorMessage.ErrorMessageState} ErrorMessageState
 */

/**
 * ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'

import transform from '#cogs/transformers/error-message'

import TextContent from '#cogs/components/common/text-content'

export default class ErrorMessage extends Component {
  /**
   *  @type {ErrorMessageState}
   */
  state = {}

  hasTextContent () {
    const {
      errorMessage
    } = this.props

    const {
      text
    } = transform(errorMessage)

    return !!text
  }

  getTextContent () {
    const {
      errorMessage
    } = this.props

    const {
      text
    } = transform(errorMessage)

    return text
  }

  getClassName () {
    return 'error-message'
  }

  /**
   *  Merge latest `props` to `state`
   *
   *  @param {ErrorMessageProps} props   Latest props
   *  @param {ErrorMessageState} state   Current state
   *  @returns {ErrorMessageState}
   */
  static getDerivedStateFromProps ({ errorMessage }, { errorMessage: E }) {
    return {
      errorMessage: equal(errorMessage, E) ? E : errorMessage
    }
  }

  /**
   *  Compare current and latest `state` for changes to `errorMessage`
   *
   *  @param {ErrorMessageProps} props   Latest props
   *  @param {ErrorMessageState} state   Latest state
   *  @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      errorMessage: e
    } = state

    const {
      errorMessage: E
    } = this.state

    return !equal(E, e)
  }

  renderTextContent () {
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent
          textContent={textContent}
        />
      )
    }

    return null
  }

  render () {
    const {
      errorMessage
    } = this.props

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
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape({}).isRequired,
    uri: PropTypes.string.isRequired
  })
}
