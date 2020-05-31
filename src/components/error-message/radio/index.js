/**
 * RadioErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from 'shinkansen-cogs/components/error-message'

export default class RadioErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}

RadioErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}

RadioErrorMessage.defaultProps = {
  ...ErrorMessage.defaultProps
}
