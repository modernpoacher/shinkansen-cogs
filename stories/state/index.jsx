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

  /**
   * @param {any} children
   * @param {Record<PropertyKey, unknown>} props
   * @returns {any}
   */
  mapChildren (children, props) {
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

      /**
       * @param {string} name
       * @param {unknown} value
       */
      function onChange (name, value) {
        log(name, value)
      }

      return this.mapChildren(
        children,
        {
          ...props,
          defaultValue,
          onChange
        }
      )
    }

    const { value } = this.state

    /**
     * @param {string} name
     * @param {unknown} value
     */
    const onChange = (name, value) => {
      this.setState({ value }, function onStateChange () {
        log(name, value)
      })
    }

    return this.mapChildren(
      children,
      {
        ...props,
        value,
        onChange
      }
    )
  }
}

ValueState.propTypes = {
  ...State.propTypes
}

export class CheckState extends State {
  hasDefaultChecked () {
    return (
      'defaultChecked' in this.props
    )
  }

  /**
   * @param {any} children
   * @param {Record<PropertyKey, unknown>} props
   * @returns {any}
   */
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
      const { defaultChecked } = this.state

      /**
       * @param {string} name
       * @param {unknown} value
       * @param {boolean} checked
       */
      function onChange (name, value, checked) {
        log(name, value, checked)
      }

      return this.mapChildren(
        children,
        {
          ...props,
          defaultChecked: !!defaultChecked,
          onChange
        }
      )
    }

    const { checked = false } = this.state

    /**
     * @param {string} name
     * @param {unknown} value
     * @param {boolean} checked
     */
    const onChange = (name, value, checked) => {
      this.setState({ value, checked }, function onStateChange () {
        log(name, value, checked)
      })
    }

    return this.mapChildren(
      children,
      {
        ...props,
        checked: !!checked,
        onChange
      }
    )
  }
}

CheckState.propTypes = {
  ...State.propTypes
}

export class RadioState extends State {
  hasDefaultChecked () {
    return (
      'defaultChecked' in this.props
    )
  }

  /**
   * @param {any} children
   * @param {Record<PropertyKey, unknown>} props
   * @param {Record<PropertyKey, unknown>} state
   * @returns {any}
   */
  mapDefaultChildren (children, props, { defaultChecked, value /* State value */ } = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS,
        props: {
          value: VALUE /* Component value */
        } = {}
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          defaultChecked: defaultChecked && value === VALUE,
          value: VALUE
        }
      )
    })
  }

  /**
   * @param {any} children
   * @param {Record<PropertyKey, unknown>} props
   * @param {Record<PropertyKey, unknown>} state
   * @returns {any}
   */
  mapChildren (children, props, { checked, value /* State value */ } = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS,
        props: {
          value: VALUE /* Component value */
        } = {}
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          checked: checked && value === VALUE,
          value: VALUE
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultChecked()) {
      const { value, defaultChecked = false } = this.state

      /**
       * @param {string} name
       * @param {unknown} value
       * @param {boolean} checked
       */
      function onChange (name, value, checked) {
        log(name, value, checked)
      }

      return this.mapDefaultChildren(
        children,
        {
          ...props,
          onChange
        },
        {
          value,
          defaultChecked
        }
      )
    }

    const { value, checked = false } = this.state

    /**
     * @param {string} name
     * @param {unknown} value
     * @param {boolean} checked
     */
    const onChange = (name, value, checked) => {
      this.setState({ value, checked }, function onStateChange () {
        log(name, value, checked)
      })
    }

    return this.mapChildren(
      children,
      {
        ...props,
        onChange
      },
      {
        value,
        checked
      }
    )
  }
}

RadioState.propTypes = {
  ...State.propTypes
}
