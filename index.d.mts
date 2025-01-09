declare global {
  namespace CogsTypes {
    export type OnChangeType = () => void

    export interface ErrorDefinitionType {
      type: string
      uri: string
      params: {
        expectedType: string
      }
    }
  }
}

export {}
