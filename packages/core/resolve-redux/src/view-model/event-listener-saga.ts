import { take, put, select } from 'redux-saga/effects'

import getHash from '../get-hash'
import { aggregateVersionsMap, lastTimestampMap } from '../constants'
import { CONNECT_VIEWMODEL } from '../action-types'
import unsubscribeViewModelTopicsSaga from './unsubscribe-view-model-topics-saga'
import { RootSagaArgs } from '../types'

type EventListenerSagaArgs = {
  viewModels: any
  sagaManager: any
  sagaKey: string
} & RootSagaArgs

type SubscriptionArgs = {
  cursor: string
  url: string
}

const eventListenerSaga = function*(
  { viewModels, sagaKey, sagaManager, store }: EventListenerSagaArgs,
  { cursor, url }: SubscriptionArgs
) {




  //  const viewM

  //setState(viewModel.projection[event.type](closure.state, event), false)



  /*
  while (true) {
    const { message: event } = yield take(
      (action: any): any =>
        action.type === DISPATCH_TOPIC_MESSAGE &&
        eventTypes.indexOf(action.message.type) > -1 &&
        (connectAction.aggregateIds === '*' ||
          connectAction.aggregateIds.indexOf(action.message.aggregateId) > -1)
    )

    const {
      viewModels: {
        [aggregateVersionsMap]: viewModelAggregateVersionsMap,
        [lastTimestampMap]: viewModelLastTimestampMap
      }
    } = yield select()

    const key = `${connectAction.viewModelName}${getHash(
      connectAction.aggregateIds
    )}${getHash(connectAction.aggregateArgs)}`

    if (!viewModelAggregateVersionsMap.hasOwnProperty(key)) {
      continue
    }

    const lastTimestamp = viewModelLastTimestampMap[key]
    const versionsMap = viewModelAggregateVersionsMap[key]
    if (!versionsMap.hasOwnProperty(event.aggregateId)) {
      versionsMap[event.aggregateId] = 0
    }

    if (
      event.aggregateVersion > versionsMap[event.aggregateId] &&
      event.timestamp >= lastTimestamp
    ) {
      try {
        yield put(event)
        versionsMap[event.aggregateId] = event.aggregateVersion
        viewModelLastTimestampMap[key] = event.timestamp
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error)

        yield* unsubscribeViewModelTopicsSaga({
          viewModels,
          viewModelName: connectAction.viewModelName,
          aggregateIds: connectAction.aggregateIds
        })

        yield* sagaManager.stop(`${CONNECT_VIEWMODEL}${sagaKey}`, () =>
          store.dispatch({
            ...connectAction,
            skipConnectionManager: true
          })
        )
      }
    }
  }
   */
}

export default eventListenerSaga
