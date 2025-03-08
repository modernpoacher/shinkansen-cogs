/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Email.EmailProps} EmailProps
 */

/**
 *  EmailTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & EmailProps>}
 */
export default class EmailTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}
