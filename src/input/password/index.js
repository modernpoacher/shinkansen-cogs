/**
 * Password component
 *
*/
import React from 'react'
import Input from '~/src/input'

export default class Password extends Input {
  getInputClassName () {
    return 'password'
  }

  getInput () {
    const {
      id,
      name,
      value,
      required
    } = this.props

    return (
      <input
        id={id || name}
        name={name}
        defaultValue={value}
        required={required}
        className={this.getInputClassName()}
        placeholder={this.getPlaceholder()}
        type='password'
        ref={this.setRef}
      />
    )
  }
}
