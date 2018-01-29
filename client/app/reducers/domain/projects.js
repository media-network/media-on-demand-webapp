import { PROJECT } from 'actions/project'

const initialState = {
}

const restructPresets = (presets = []) => {
  return presets.reduce((combine, preset) => {
    console.log(preset)

    combine[preset.hash] = preset

    return combine
  }, {})
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT.FETCH_ALL_SUCCESS:
      return action.payload.reduce((nextState, project) => {
        nextState[project.slug] = {
          ...project,
          presets: restructPresets(project.presets)
        }

        return nextState
      }, {})

    case PROJECT.FETCH_SUCCESS:
    case PROJECT.CREATE_SUCCESS:
    case PROJECT.UPDATE_SUCCESS:
      return {
        ...state,
        [action.payload.slug]: {
          ...action.payload,
          presets: restructPresets(action.payload.presets)
        }
      }
  }

  return state
}
