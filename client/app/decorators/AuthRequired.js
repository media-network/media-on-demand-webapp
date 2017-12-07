import React from 'react'
import { connect } from 'react-redux'

import Redirect from 'components/Redirect'

export default function(Component) {

  @connect(state => ({ unauthorized: !!(state.data.session && !state.data.session.verified) }))
  class AuthRequired extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const { unauthorized } = this.props

      return (
        unauthorized ?
          <Redirect path="/sign-in" /> :
          <Component { ...this.props } { ...this.state } />
      )
    }
  }

  return AuthRequired
}
