/**
 *  @typedef {CogsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {CogsTypes.Components.Title.Textarea.TextareaProps} TextareaProps
 */

/**
 * TextareaTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

/**
 *  @extends {Title<TitleProps & TextareaProps>}
 */
export default class TextareaTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}
