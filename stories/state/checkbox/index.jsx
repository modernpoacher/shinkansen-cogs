import debug from 'debug'

import { Children, cloneElement } from 'react'

import State from '#stories/state'

const log = debug('@modernpoacher/cogs/stories')

export default class RadioState extends State {
  state = {
    ...this.props
  }

  hasDefaultValue () {
    return (
      'defaultValue' in this.props
    )
  }

  hasValue () {
    return (
      'value' in this.props
    )
  }

  mapDefaultChildren (children, props, { defaultValue } = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS,
        props: {
          value: VALUE
        }
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          defaultChecked: defaultValue === VALUE,
          value: VALUE
        }
      )
    })
  }

  mapChildren (children, props, { value } = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS,
        props: {
          value: VALUE
        }
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          checked: value === VALUE,
          value: VALUE
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultValue()) {
      const { defaultValue } = this.state

      return this.mapDefaultChildren(
        children,
        {
          ...props,
          onChange: (NAME, VALUE, CHECKED) => log(NAME, VALUE, CHECKED)
        },
        {
          defaultValue
        }
      )
    }

    const { value } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        onChange: (NAME, VALUE, CHECKED) => { this.setState({ value: value === VALUE ? null : VALUE, checked: CHECKED }, () => log(NAME, VALUE, CHECKED)) }
      },
      {
        value
      }
    )
  }
}

RadioState.propTypes = {
  ...State.propTypes
}
