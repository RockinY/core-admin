import { combineReducers } from 'redux'
import modals from './modals'

export default (extraReducers) => {
  return combineReducers({
    modals,
    ...extraReducers
  })
}