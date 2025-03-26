/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Text.TextProps} TextProps
 */

/**
 *  TextTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & TextProps>}
 */
export default class TextTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}
