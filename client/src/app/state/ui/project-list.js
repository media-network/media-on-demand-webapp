import { combineReducers } from 'redux'

import { types } from 'state/ducks/project'
import createReducer from 'state/helpers/create-reducer'

export default {
  component: 'ProjectList',
  reducer: combineReducers({
    sortCondition: createReducer(null)({
      [ types.SORT ]: (state, action) => action.payload.sortCondition
    }),
    hideDisableProjects: createReducer(null)({
      [ types.HIDE_DISABLE ]: (state, action) => !state
    })
  })
}
