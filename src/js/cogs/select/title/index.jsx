/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Select.SelectProps} SelectProps
 */

/**
 *  SelectTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & SelectProps>}
 */
export default class SelectTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}
