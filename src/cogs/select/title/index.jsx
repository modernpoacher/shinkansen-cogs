/**
 * SelectTitle component
 */
import classnames from 'classnames'
import Title from '@modernpoacher/cogs/components/title'

export default class SelectTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'select')
  }
}

SelectTitle.propTypes = {
  ...Title.propTypes
}
