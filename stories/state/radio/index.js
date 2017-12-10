import { Children, cloneElement } from 'react'

import State from 'stories/state'

import { action } from '@storybook/addon-actions'

const actionClick = action('click')
const actionChange = action('change')

export default class RadioState extends State {
  constructor (props) {
    super(props)

    const { children } = props

    let state = {}
    Children.forEach(children, ({ props }) => {
      const { checked } = props // eslint-disable-line

      if (checked) {
        const { value } = props // eslint-disable-line

        state = { value }
      }
    })

    this.state = {
      ...state
    }
  }

  componentWillReceiveProps ({ children }) {
    Children.forEach(children, ({ props }) => {
      const { checked } = props

      if (checked) {
        const { value } = props

        this.setState({ value })
      }
    })
  }

  hasDefaultChecked () {
    const { children } = this.props

    let hasDefaultChecked = false
    Children.forEach(children, ({ props: { defaultChecked } }) => {
      if (defaultChecked) {
        hasDefaultChecked = true
      }
    })

    return hasDefaultChecked
  }

  hasChecked () {
    const { children } = this.props

    let hasChecked = false
    Children.forEach(children, ({ props: { checked } }) => {
      if (checked) {
        hasChecked = true
      }
    })

    return hasChecked
  }

  mapDefaultChildren (children, props, state = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS
      } = child

      const { defaultChecked } = PROPS

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          defaultChecked: !!defaultChecked
        }
      )
    })
  }

  mapChildren (children, props, state = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS
      } = child

      if ('value' in state) {
        const { value } = state
        const { value: VALUE } = PROPS

        return cloneElement(
          child,
          {
            ...PROPS,
            ...props,
            checked: value === VALUE
          }
        )
      }

      const { checked } = PROPS

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          checked: !!checked
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultChecked()) {
      return this.mapDefaultChildren(
        children,
        {
          ...props,
          onClick: (value) => actionClick(value),
          onChange: (value) => actionChange(value)
        }
      )
    }

    const { ...state } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        onClick: (value) => { this.setState({ value }, () => actionClick(value)) },
        onChange: (value) => { this.setState({ value }, () => actionChange(value)) }
      },
      {
        ...state
      }
    )
  }
}

RadioState.propTypes = {
  ...State.propTypes
}
