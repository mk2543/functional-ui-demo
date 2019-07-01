import { createSelector } from 'reselect'
import { AppState } from '../reducers/root'

const requestsInProgress = (state: AppState): number => state.system.requestsInProgress

export const isSomethingInProgress = createSelector([requestsInProgress], (count) => count > 0)