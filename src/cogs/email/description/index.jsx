/**
 * EmailDescription component
 */
import classnames from 'classnames'
import Description from '#cogs/components/description'

export default class EmailDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}
