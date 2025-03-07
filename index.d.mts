declare global {
  namespace CogsTypes {
    export type onEventType = () => void

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
