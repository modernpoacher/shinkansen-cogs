import type React from 'react'

declare global {
  namespace CogsTypes {
    export type OnChangeType = (
      name: string,
      value?: string | string[],
      checked?: boolean
    ) => void

    export type OnClickType = (
      name: string,
      value?: string | string[],
      checked?: boolean
    ) => void

    export interface ErrorDefinitionType {
      type: string
      uri: string
      params: Record<PropertyKey, unknown> | Record<PropertyKey, never>
    }

    export interface FieldErrorType {
      text: string
      href: string
    }

    export namespace Components {
      export namespace Common {
        export namespace TextContent {
          export interface TextContentProps {
            textContent?: string
          }
        }
      }

      export namespace Description {
        export interface DescriptionProps {
          description?: string
        }
      }

      export namespace ErrorMessage {
        export interface ErrorMessageProps {
          errorMessage?: ErrorDefinitionType
        }

        export interface ErrorMessageState {
          errorMessage?: ErrorDefinitionType
        }
      }

      export namespace Field {
        export interface FieldProps extends React.PropsWithChildren {
          id?: string
          name: string
          required?: boolean
          disabled?: boolean
          readOnly?: boolean
          tabIndex?: number
          accessKey?: string
          placeholder?: string
          onChange?: OnChangeType
          fieldRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export interface ValueProps extends FieldProps {
          value?: string,
          defaultValue?: string
        }

        export interface CheckProps extends FieldProps {
          value?: string,
          checked?: boolean,
          defaultChecked?: boolean,
          onClick: OnClickType
        }

        export namespace Checkbox {
          export type CheckboxProps = CheckProps
        }

        export namespace Email {
          export type EmailProps = ValueProps
        }

        export namespace Number {
          export type NumberProps = ValueProps
        }

        export namespace Password {
          export type PasswordProps = ValueProps
        }

        export namespace Radio {
          export type RadioProps = CheckProps
        }

        export namespace Select {
          export interface SelectProps extends ValueProps, React.PropsWithChildren {
            multiple?: boolean
          }
        }

        export namespace Text {
          export type TextProps = ValueProps
        }

        export namespace Textarea {
          export type TextareaProps = ValueProps
        }
      }

      export namespace Title {
        export interface TitleProps extends React.PropsWithChildren {
          id: string
          title?: string
          required?: boolean
          disabled?: boolean
          readOnly?: boolean
        }

        export namespace Checkbox {
          export type CheckboxProps = TitleProps
        }

        export namespace Email {
          export type EmailProps = TitleProps
        }

        export namespace Number {
          export type NumberProps = TitleProps
        }

        export namespace Password {
          export type PasswordProps = TitleProps
        }

        export namespace Radio {
          export type RadioProps = TitleProps
        }

        export namespace Select {
          export type SelectProps = TitleProps
        }

        export namespace Text {
          export type TextProps = TitleProps
        }

        export namespace Textarea {
          export type TextareaProps = TitleProps
        }
      }
    }

    export namespace Cogs {
      export namespace Cog {
        export interface CogProps {
          id?: string
          name: string
          title?: string
          description?: string
          errorMessage?: ErrorDefinitionType
          required?: boolean
          disabled?: boolean
          readOnly?: boolean
          tabIndex?: number,
          accessKey?: string,
          placeholder?: string
          onChange?: OnChangeType
          fieldRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export interface ValueProps extends CogProps {
          value?: string,
          defaultValue?: string
        }

        export interface CheckProps extends CogProps {
          value?: string,
          checked?: boolean,
          defaultChecked?: boolean,
          onClick: OnClickType
        }

        export namespace Checkbox {
          export type CheckboxProps = CheckProps
        }

        export namespace Email {
          export type EmailProps = ValueProps
        }

        export namespace Number {
          export interface NumberProps extends Omit<Omit<ValueProps, 'value'>, 'defaultValue'> {
            value?: string | number
            defaultValue?: string | number
          }
        }

        export namespace Password {
          export type PasswordProps = ValueProps
        }

        export namespace Radio {
          export type RadioProps = CheckProps
        }

        export namespace Select {
          export interface SelectProps extends Omit<Omit<ValueProps, 'value'>, 'defaultValue'>, React.PropsWithChildren {
            multiple?: boolean
            value?: string | string[]
            defaultValue?: string | string[]
          }
        }

        export namespace Text {
          export type TextProps = ValueProps
        }

        export namespace Textarea {
          export type TextareaProps = ValueProps
        }
      }
    }
  }
}

export {}
