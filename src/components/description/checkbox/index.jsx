/**
 * CheckboxDescription component
 */
import classnames from 'classnames'
import Description from '@modernpoacher/cogs/components/description'

export default class CheckboxDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}

CheckboxDescription.propTypes = {
  ...Description.propTypes
}

CheckboxDescription.defaultProps = {
  ...Description.defaultProps
}
