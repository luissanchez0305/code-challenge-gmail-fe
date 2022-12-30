import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <Container>
      <LogoContainer>
        <MenuContainer>
          <MenuIcon />
        </MenuContainer>
        <Logo>
          <img src='https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg'/>
        </Logo>
      </LogoContainer>

      <SearchContainer>
        <SearchBarContainer>
          <SearchIconContainer />
          <input type='text' placeholder='Search mail' />
          <ExpandMoreIcon/>
        </SearchBarContainer>
      </SearchContainer>

      <IconContainer>
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`

const LogoContainer = styled.div`
  display: grid;
  height: 45px;
  grid-template-columns: 25% auto;
`

const Logo = styled.div`
  display: flex;
  height: 45px;
`

const MenuContainer = styled.div`
  display: grid;
  place-items: center
`

const SearchContainer = styled.div``

const SearchIconContainer = styled(SearchIcon)`
  color: #5f6368
`

const SearchBarContainer = styled.div`
  background-color: #f1f3f4;
  max-width: 750px;
  width: 100%;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  .MuiSvgIcon-root {
    color: #5f6368
  }

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;

    }
  }
`

const IconContainer = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, 25%);

  .MuiSvgIcon-root {
    color: #5f6368
  }
`

