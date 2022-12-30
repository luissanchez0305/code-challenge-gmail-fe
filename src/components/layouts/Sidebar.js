import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { sidebarButtonItems } from '../data/SidebarButtonItems'
import { bottomIcons } from '../data/BottomIcons'

import VideocamIcon from '@mui/icons-material/Videocam'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Sidebar() {
  return (
    <Container>
      <TopSectionContainer>
        <ComposeContainer>
          <Compose />
        </ComposeContainer>

        <FoldersContainer>
          {
            sidebarButtonItems.map(item => (
              <SidebarButtonItems>{item.icon} {item.text}</SidebarButtonItems>
            ))
          }
        </FoldersContainer>
      </TopSectionContainer>
      <BottomSectionContainer>
        <SidebarSectionContainer>
          <Title>Meet</Title>
          <p><VideocamIcon/> New Meeting</p>
          <p><KeyboardIcon/> Join Meeting</p>
        </SidebarSectionContainer>

        <SidebarSectionContainer>
          <Title>Hangouts</Title>
          <p><AccountCircleIcon/> Luis Ricardo Sanchez</p>

        </SidebarSectionContainer>

        <CommunicationContainer>
          {
            bottomIcons.map(icon => (
              <>{icon}</>
            ))
          }
        </CommunicationContainer>
      </BottomSectionContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  border-right: 1px solid lightgray;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`  

const ComposeContainer = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`

const TopSectionContainer = styled.div``

const BottomSectionContainer = styled.div`
  margin-bottom: 20px;
`

const FoldersContainer = styled.div``

const Title = styled.h4`
  padding-left: 25px;
  margin-bottom: 3px;
  margin-top: 4px;
`

const SidebarButtonItems = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;

  :hover {
    background-color: #f5f7f7;
  }
`

const SidebarSectionContainer = styled.div`
  border-top: 1px solid lightgray;

  p {
    color: gray;
    display: grid;
    grid-template-columns: 14% auto;
    height: 30px;
    align-items: center;
    padding-left: 25px;
  }
`

const CommunicationContainer = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  border-top: 1px solid lightgray;
  margin-top: 60px;

  .MuiSvgIcon-root {
    padding: 2px;
  }
`