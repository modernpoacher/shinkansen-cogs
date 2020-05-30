/**
 * SelectLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class SelectLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}

SelectLabel.propTypes = {
  ...Label.propTypes
}

SelectLabel.defaultProps = {
  ...Label.defaultProps
}
