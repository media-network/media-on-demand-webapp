import React from 'react'
import styled from 'styled-components'

import { Card, List, StatusIndicator } from 'ui/elements'
import { AddIcon } from 'ui/icons'
import { Heading, Text, TextLine } from 'ui/typo'

const Layout = styled.section`
  padding: 16px;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: #e6e6e6;
`

const Container = styled.div`
  display: grid;
  & > * {
    min-height: 0;
    min-width: 0;
  }
  grid-gap: 16px;
  grid-template-columns: 100%;
  background: ${ ({ theme }) => theme.white.base };
`

const Profile = () => (
  <Layout>
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  </Layout>
)

export default Profile
