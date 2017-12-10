/**
 * TextareaLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-cogs/components/label'

export default class TextareaLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'textarea')
  }
}

TextareaLabel.propTypes = {
  ...Label.propTypes
}

TextareaLabel.defaultProps = {
  ...Label.defaultProps,
  label: 'Textarea'
}
