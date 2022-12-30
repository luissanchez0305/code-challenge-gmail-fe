import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import EmailsView from './EmailsView'
import SideIcons from './SideIcons'

function Main() {
  return (
    <Container>
        <Sidebar/>
        <EmailsView/>
        <SideIcons/>
    </Container>
  )
}

export default Main

const Container = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
`