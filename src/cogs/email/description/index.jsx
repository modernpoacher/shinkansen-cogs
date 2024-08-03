/**
 * EmailDescription component
 */
import classnames from 'classnames'
import Description from '@modernpoacher/cogs/components/description'

export default class EmailDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}

EmailDescription.propTypes = {
  ...Description.propTypes
}
