/**
 *  @typedef {CogsTypes.Super.Components.Description.DescriptionProps} DescriptionProps
 */

/**
 *  Description component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#cogs/components/common/text-content'

/**
 *  @extends {Component<DescriptionProps>}
 */
export default class Description extends Component {
  getClassName () {
    return 'description'
  }

  /**
   *  @param {DescriptionProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.description !== this.props.description)
    )
  }

  render () {
    const {
      description
    } = this.props

    if (description) {
      return (
        <span className={this.getClassName()}>
          <TextContent textContent={description} />
        </span>
      )
    }

    return null
  }
}

Description.propTypes = {
  description: PropTypes.string
}
