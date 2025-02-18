/**
 * RadioErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#cogs/components/error-message'

export default class RadioErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}
