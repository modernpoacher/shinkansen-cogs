/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Password.PasswordProps} PasswordProps
 */

/**
 * PasswordTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & PasswordProps>}
 */
export default class PasswordTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }
}
