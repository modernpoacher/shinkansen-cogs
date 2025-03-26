/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Checkbox.CheckboxProps} CheckboxProps
 */

/**
 * CheckboxTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & CheckboxProps>}
 */
export default class CheckboxTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}
