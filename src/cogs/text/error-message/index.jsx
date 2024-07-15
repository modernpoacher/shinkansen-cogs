/**
 * TextErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from 'shinkansen-cogs/components/error-message'

export default class TextErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}
