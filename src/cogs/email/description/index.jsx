/**
 * EmailDescription component
 */
import classnames from 'classnames'
import Description from 'shinkansen-cogs/components/description'

export default class EmailDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}

EmailDescription.propTypes = {
  ...Description.propTypes
}

EmailDescription.defaultProps = {
  ...Description.defaultProps
}
