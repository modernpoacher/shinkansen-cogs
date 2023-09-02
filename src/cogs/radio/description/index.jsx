/**
 * RadioDescription component
 */
import classnames from 'classnames'
import Description from 'shinkansen-cogs/components/description'

export default class RadioDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'radio')
  }
}

RadioDescription.propTypes = {
  ...Description.propTypes
}

RadioDescription.defaultProps = {
  ...Description.defaultProps
}
