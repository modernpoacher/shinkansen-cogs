import debug from 'debug'

import { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

const log = debug('shinkansen-cogs/stories')

export default class State extends Component {
  state = {
    ...this.props
  }

  getChildren () {
    const { children } = this.props

    return children
  }

  render () {
    return this.getChildren()
  }
}

State.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]).isRequired
}

export class ValueState extends State {
  hasDefaultValue () {
    return (
      'defaultValue' in this.props
    )
  }

  mapChildren (children, props = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS = {},
        props: {
          children: CHILDREN
        } = {}
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          children: CHILDREN
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultValue()) {
      const { defaultValue } = this.state

      return this.mapChildren(
        children,
        {
          ...props,
          defaultValue,
          onChange: (NAME, VALUE) => log(NAME, VALUE)
        }
      )
    }

    const { value } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        value,
        onChange: (NAME, VALUE) => {
          this.setState({ value: VALUE }, () => log(NAME, VALUE))
        }
      }
    )
  }
}

ValueState.propTypes = {
  ...State.propTypes
}

export class CheckState extends Component {
  state = {
    ...this.props
  }

  hasDefaultChecked () {
    return (
      'defaultChecked' in this.props
    )
  }

  mapChildren (children, props) {
    return Children.map(children, (child) => {
      const {
        props: PROPS
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultChecked()) {
      const { value, defaultChecked } = this.state

      return this.mapChildren(
        children,
        {
          ...props,
          value,
          defaultChecked: !!defaultChecked,
          onChange: (name, value, checked) => log(name, value, checked)
        }
      )
    }

    const { value, checked } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        value,
        checked: !!checked,
        onChange: (name, value, checked) => {
          this.setState({ value, checked }, () => log(name, value, checked))
        }
      }
    )
  }

  render () {
    return this.getChildren()
  }
}

CheckState.propTypes = {
  ...State.propTypes
}
