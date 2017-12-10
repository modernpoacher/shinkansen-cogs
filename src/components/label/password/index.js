/**
 * PasswordLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class PasswordLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }
}

PasswordLabel.propTypes = {
  ...Label.propTypes
}

PasswordLabel.defaultProps = {
  ...Label.defaultProps,
  label: 'Password'
}
