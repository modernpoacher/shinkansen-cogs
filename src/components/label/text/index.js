/**
 * TextLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class TextLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'text')
  }
}

TextLabel.propTypes = {
  ...Label.propTypes
}

TextLabel.defaultProps = {
  ...Label.defaultProps,
  label: 'Text'
}
