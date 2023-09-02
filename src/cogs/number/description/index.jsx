/**
 * NumberDescription component
 */
import classnames from 'classnames'
import Description from 'shinkansen-cogs/components/description'

export default class NumberDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}

NumberDescription.propTypes = {
  ...Description.propTypes
}

NumberDescription.defaultProps = {
  ...Description.defaultProps
}
