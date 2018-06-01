import authRoutes from './auth'
import unauthRoutes from './unauth'

export const overlay = []
export const content = []
export const still = []

Object.entries(unauthRoutes).forEach(
  ([ path, component ]) => {
    overlay.push({ path, component, exact: true })
  }
)

Object.entries(authRoutes).forEach(
  ([ path, { Content, Still } ]) => {
    content.push({ path, component: Content, exact: true })
    still.push({ path, component: Still, exact: true })
  }
)
