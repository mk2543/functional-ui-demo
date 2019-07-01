import { SystemActions, COMMUNICATION_ERROR_HAS_HAPPENED, ALERT_WAS_DISMISSED } from '../domain/systemTypes'

export const alertWasDismissed = (): SystemActions => ({ type: ALERT_WAS_DISMISSED })
export const communicationErrorHasHappened = (): SystemActions => ({ type: COMMUNICATION_ERROR_HAS_HAPPENED })