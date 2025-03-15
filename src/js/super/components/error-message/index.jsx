/**
 *  @typedef {CogsTypes.ErrorDefinitionType} ErrorDefinitionType
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageProps} ErrorMessageProps
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageState} ErrorMessageState
 */

/**
 *  ErrorMessage component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'

import transform from '#cogs/transformers/error-message'

import TextContent from '#cogs/components/common/text-content'

/**
 *  @extends {Component<ErrorMessageProps, ErrorMessageState>}
 */
export default class ErrorMessage extends Component {
  /**
   *  @type {ErrorMessageState}
   */
  state = {}

  hasTextContent () {
    const {
      errorMessage
    } = this.props

    if (errorMessage) {
      const {
        text
      } = transform(errorMessage)

      return !!text
    }

    return false
  }

  getTextContent () {
    const {
      errorMessage
    } = this.props

    if (errorMessage) {
      const {
        text
      } = transform(errorMessage)

      return text
    }

    return ''
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
  static getDerivedStateFromProps ({ errorMessage: e }, { errorMessage: E }) {
    return {
      errorMessage: (e === E || equal(e, E)) ? E : e
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
    } = this.state

    const {
      errorMessage: E
    } = state

    return !(e === E || equal(e, E))
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
