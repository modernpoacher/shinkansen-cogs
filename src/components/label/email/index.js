/**
 * EmailLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class EmailLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}

EmailLabel.propTypes = {
  ...Label.propTypes
}

EmailLabel.defaultProps = {
  ...Label.defaultProps
}
