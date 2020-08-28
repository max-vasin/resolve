export type CreateQueryOptions = {
  invokeEventBusAsync: Function
  readModelConnectors: any
  readModels: any[]
  viewModels: any[]
  performanceTracer: any
  eventstoreAdapter: any
  getRemainingTimeInMillis: any
  performAcknowledge: any
}

type WrapModelOptions = Omit<
  Omit<CreateQueryOptions, 'readModels'>,
  'viewModels'
>

export type WrapReadModelOptions = WrapModelOptions & { readModel: any }
export type WrapViewModelOptions = WrapModelOptions & { viewModel: any }

export type EventStoreAdapter = {
  loadEvents: Function
  getNextCursor: Function
}

export type SerializedError = {
  name: string | null
  code: string | null
  message: string
  stack: string
}

export type ReadModelMeta = {
  name: string
  resolvers: { [key: string]: any }
  projection: { [key: string]: Function }
  connectorName: string
}

export type ReadModelPool = {
  performanceTracer: any
  getSecretsManager: any
  eventstoreAdapter: any
  isDisposed: boolean
  connector: any
  connections: Set<any>
  readModel: ReadModelMeta
  invokeEventBusAsync: Function
  performAcknowledge: Function
  getRemainingTimeInMillis: Function
}

export type ViewModelMeta = {
  name: string
  invariantHash: string
  deserializeState: Function
  serializeState: Function
  projection: { [key: string]: Function }
  resolver: Function
  encryption: Function
}

export type ViewModelPool = {
  viewModel: ViewModelMeta
  eventstoreAdapter: any
  getSecretsManager: Function
  performanceTracer: any
  isDisposed: boolean
}

export type BuildViewModelQuery = {
  aggregateIds: Array<string> | null
  aggregateArgs: any
}
