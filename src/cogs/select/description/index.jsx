/**
 * SelectDescription component
 */
import classnames from 'classnames'
import Description from 'shinkansen-cogs/components/description'

export default class SelectDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}

SelectDescription.propTypes = {
  ...Description.propTypes
}
