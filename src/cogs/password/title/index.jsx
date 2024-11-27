/**
 * PasswordTitle component
 */
import classnames from 'classnames'
import Title from '#cogs/components/title'

export default class PasswordTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }
}

PasswordTitle.propTypes = {
  ...Title.propTypes
}
