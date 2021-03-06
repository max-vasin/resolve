import fetch from 'isomorphic-fetch'
import columnify from 'columnify'

import getEventDate from '../../utils/getEventDate'

export const handler = async ({ url }) => {
  const response = await fetch(`${url}/event-broker/read-models-list`)
  const result = await response.json()
  if (result.length === 0) {
    // eslint-disable-next-line no-console
    console.log('Read-models is not defined')
    return
  }
  const columns = []
  for (const {
    eventSubscriber,
    status,
    successEvent,
    failedEvent,
    errors,
  } of result) {
    columns.push({
      name: eventSubscriber,
      status,
      'success event': successEvent
        ? `${getEventDate(successEvent)} ${successEvent.type}`
        : 'N\\A',
      'failed event': failedEvent
        ? `${getEventDate(failedEvent)} ${failedEvent.type}`
        : 'N\\A',
      'last error': errors ? errors[errors.length - 1].message : 'N\\A',
    })
  }
  // eslint-disable-next-line no-console
  console.log(
    columnify(columns, {
      minWidth: 20,
    })
  )
}

export const command = 'list'
export const aliases = ['ls']
export const describe = "display a list of an application's read models"
