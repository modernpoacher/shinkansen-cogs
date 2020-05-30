/**
 * NumberLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class NumberLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'number')
  }
}

NumberLabel.propTypes = {
  ...Label.propTypes
}

NumberLabel.defaultProps = {
  ...Label.defaultProps
}
