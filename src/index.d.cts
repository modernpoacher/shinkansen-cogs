declare namespace CogsTypes {
  export type OnChangeType = () => void

  export interface ErrorDefinitionType {
    type: string
    uri: string
    params: {
      expectedType: string
    }
  }
}

declare module '@modernpoacher/cogs/cogs' {
  import React from 'react'

  export interface CogProps {
    id: string
    name: string
    title: string
    description: string
    errorMessage: CogsTypes.ErrorDefinitionType
    required: boolean
    disabled: boolean
    readOnly: boolean
    placeholder: string
    onChange: CogsTypes.OnChangeType
    fieldRef: object
  }

  export default class Cog extends React.Component<CogProps> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class CheckboxCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/email' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class EmailCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/number' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class NumberCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/password' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class PasswordCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/radio' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class RadioCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/select' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class SelectCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/text' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class TextCog extends Cog {}
}

declare module '@modernpoacher/cogs/cogs/textarea' {
  import Cog from '@modernpoacher/cogs/cogs'

  export default class TextareaCog extends Cog {}
}

declare module '@modernpoacher/cogs/components/common/disabled' {
  import type React from 'react'

  export default function Disabled (): React.JSX.Element
}

declare module '@modernpoacher/cogs/components/common/readonly' {
  import type React from 'react'

  export default function ReadOnly (): React.JSX.Element
}

declare module '@modernpoacher/cogs/components/common/required' {
  import type React from 'react'

  export default function Required (): React.JSX.Element
}

declare module '@modernpoacher/cogs/components/common/text-content' {
  import type React from 'react'

  export interface TextContentProps {
    textContent: string
  }

  export default function TextContent (props: TextContentProps): React.JSX.Element
}

declare module '@modernpoacher/cogs/components/description' {
  import React from 'react'

  export interface DescriptionProps {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class CheckboxDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/email/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class EmailDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/number/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class NumberDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/password/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class PasswordDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/radio/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class RadioDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/select/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class SelectDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/text/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class TextDescription extends Description {}
}

declare module '@modernpoacher/cogs/cogs/textarea/description' {
  import Description from '@modernpoacher/cogs/components/description'

  export default class TextareaDescription extends Description {}
}

declare module '@modernpoacher/cogs/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = CogsTypes.ErrorDefinitionType

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class CheckboxErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/email/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class EmailErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/number/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class NumberErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/password/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class PasswordErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/radio/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class RadioErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/select/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class SelectErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/text/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class TextErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/cogs/textarea/error-message' {
  import ErrorMessage from '@modernpoacher/cogs/components/error-message'

  export default class TextareaErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/cogs/components/field' {
  import React from 'react'

  export interface FieldProps {
    id: string
    name: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    tabIndex: number
    accessKey: string
    placeholder: string
    onChange: CogsTypes.OnChangeType
    fieldRef: object
  }

  export default class Field extends React.Component<FieldProps> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class CheckboxField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/email/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class EmailField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/number/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class NumberField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/password/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class PasswordField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/radio/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class RadioField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/select/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class SelectField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/text/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class TextField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/textarea/field' {
  import Field from '@modernpoacher/cogs/components/field'

  export default class TextareaField extends Field {}
}

declare module '@modernpoacher/cogs/components/title' {
  import React from 'react'

  export interface TitleProps {
    id: string
    title: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Title extends React.Component<TitleProps> {}
}

declare module '@modernpoacher/cogs/cogs/checkbox/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class CheckboxTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/email/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class EmailTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/number/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class NumberTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/password/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class PasswordTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/radio/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class RadioTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/select/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class SelectTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/text/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class TextTitle extends Title {}
}

declare module '@modernpoacher/cogs/cogs/textarea/title' {
  import Title from '@modernpoacher/cogs/components/title'

  export default class TextareaTitle extends Title {}
}

declare module '@modernpoacher/cogs' {
  export { default as CheckboxCog } from '@modernpoacher/cogs/cogs/checkbox'
  export { default as EmailCog } from '@modernpoacher/cogs/cogs/email'
  export { default as NumberCog } from '@modernpoacher/cogs/cogs/number'
  export { default as PasswordCog } from '@modernpoacher/cogs/cogs/password'
  export { default as RadioCog } from '@modernpoacher/cogs/cogs/radio'
  export { default as SelectCog } from '@modernpoacher/cogs/cogs/select'
  export { default as TextCog } from '@modernpoacher/cogs/cogs/text'
  export { default as TextareaCog } from '@modernpoacher/cogs/cogs/textarea'
}
