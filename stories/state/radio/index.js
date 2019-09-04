import { Children, cloneElement } from 'react'

import State from 'stories/state'

import { action } from '@storybook/addon-actions'

// const actionClick = action('click')
const actionChange = action('change')

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
          // onClick: (value) => actionClick(value),
          onChange: (value) => actionChange(value)
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
        // onClick: (value) => { this.setState({ value }, () => actionClick(value)) },
        onChange: (value) => { this.setState({ value }, () => actionChange(value)) }
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
