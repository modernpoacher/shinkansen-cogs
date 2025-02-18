/**
 * TextareaErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class TextareaErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}
