import request from 'services/graphql'
import pick from 'object.pick'

import { ACCOUNT_FRAGMENT } from './account'

export const PRESET_FRAGMENT = `
  name,
  hash,
  values
`

export const PROJECT_FRAGMENT = `
  _id,
  name,
  slug,
  disabled,
  prettyOrigin,
  presets {
    ${ PRESET_FRAGMENT }
  },
  collaborators {
    _id,
    account {
      ${ ACCOUNT_FRAGMENT }
    },
    privilege
  }
`

const PROJECTS_FRAGMENT = `
  account {
    projects {
      ${ PROJECT_FRAGMENT }
    }
  }
`

export default {
  async get(slug, token) {
    const body = await request(`
      query getProject($slug: String!, $token: String!) {
        session(token: $token) {
          account {
            project(slug: $slug) {
              ${ PROJECT_FRAGMENT }
            }
          }
        }
      }
    `, { slug, token })

    return body.session.account.project
  },
  async fetch(token) {
    const body = await request(`
      query projects($token: String!) {
        session(token: $token) {
          ${ PROJECTS_FRAGMENT }
        }
      }
    `, { token })

    return body.session.account.projects
  },
  async create(project, token) {
    const body = await request(`
      query createProject($project: ProjectStruct!, $token: String!) {
        session(token: $token) {
          account {
            _createProject(project: $project) {
              ${ PROJECT_FRAGMENT }
            }
          }
        }
      }
    `, {
      project: pick(project, [ 'name', 'slug' ]),
      token
    })

    return body.session.account._createProject
  },
  async update(project, token) {
    const body = await request(`
      query updateProject($project: ProjectStruct!, $token: String!, $slug:  String!) {
        session(token: $token) {
          account {
            project(slug: $slug) {
              _update(project: $project) {
                ${ PROJECT_FRAGMENT }
              }
            }
          }
        }
      }
    `, {
      project: pick(project, [ 'name', 'origins', 'prettyOrigin', 'disabled' ]),
      token,
      slug: project.slug
    })
    return body.session.account._updateProject
  },
  async createPreset(preset, slug, token) {
    const body = await request(`
      query createPreset($preset: PresetStruct!, $token: String!, $slug: String!) {
        session(token: $token) {
          account {
            project (slug: $slug) {
              _createPreset(preset: $preset) {
                ${ PRESET_FRAGMENT }
              }
            }

          }
        }
      }
    `, {
      preset: pick(preset, [ 'name', 'values' ]),
      slug,
      token
    })
    
    return body.session.account.project._createPreset
  }
}
