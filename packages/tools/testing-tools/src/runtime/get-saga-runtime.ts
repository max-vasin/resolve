import partial from 'lodash.partial'
import { Command, Monitoring, SecretsManager } from '@resolve-js/core'
import { SagaTestResult } from '../types'

const executeCommand = (
  buffer: SagaTestResult,
  schedulerName: string,
  command: Command
) => {
  if (command.aggregateName === schedulerName) {
    buffer.scheduledCommands.push(command.payload)
  } else {
    buffer.commands.push(command)
  }
}
const executeQuery = (buffer: SagaTestResult, query: any) => {
  buffer.queries.push(query)
}

const makeScheduler = () => ({
  addEntries: () => void 0,
  clearEntries: () => void 0,
  executeEntries: () => void 0,
})

export const getSagaRuntime = (
  buffer: SagaTestResult,
  schedulerName: string,
  secretsManager: SecretsManager,
  monitoring: Monitoring,
  uploader = null
) => ({
  secretsManager,
  monitoring,
  executeCommand: partial(executeCommand, buffer),
  executeQuery: partial(executeQuery, buffer),
  scheduler: makeScheduler(),
  uploader,
  eventProperties: {},
})