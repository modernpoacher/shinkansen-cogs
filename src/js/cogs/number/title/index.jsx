/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Number.NumberProps} NumberProps
 */

/**
 * NumberTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & NumberProps>}
 */
export default class NumberTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}
