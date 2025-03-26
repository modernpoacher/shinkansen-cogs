/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Radio.RadioProps} RadioProps
 */

/**
 * RadioTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & RadioProps>}
 */
export default class RadioTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}
