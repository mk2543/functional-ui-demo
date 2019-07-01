export interface SystemState {
    requestsInProgress: number,
    shouldDisplayAlert: boolean
}

export const COMMUNICATION_ERROR_HAS_HAPPENED = 'COMMUNICATION_ERROR_HAS_HAPPENED'
export const ALERT_WAS_DISMISSED = 'ALERT_WAS_DISMISSED'

export interface SystemActions {
    type: typeof COMMUNICATION_ERROR_HAS_HAPPENED | typeof ALERT_WAS_DISMISSED
}