/**
 * CheckboxLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class CheckboxLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'checkbox')
  }
}

CheckboxLabel.propTypes = {
  ...Label.propTypes
}

CheckboxLabel.defaultProps = {
  ...Label.defaultProps
}
