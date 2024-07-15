/**
 * EmailTitle component
 */
import classnames from 'classnames'
import Title from 'shinkansen-cogs/components/title'

export default class EmailTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }
}

EmailTitle.propTypes = {
  ...Title.propTypes
}
