import React, { useState, useEffect, useContext }  from 'react'
import styled from 'styled-components'

import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@mui/icons-material/Refresh'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import EmailItem from '../emailItem/EmailItem'
import { EmailContext } from '../../contexts/EmailContext'

export default function EmailsView() {
  const { emails } = useContext(EmailContext);
  
  return (
    <Container>
      <TopContainer>
        <Checkbox />

        <IconButton>
          <RefreshIcon/>
        </IconButton>
        
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </TopContainer>

      <EmailsContainer>
        {
          emails.length > 0 ?
          emails.map(({ _id, starred, from, subject, message, received, read })=> (
            <>
              <EmailItem 
                id={_id}
                starred={starred}
                from={from}
                subject={subject}
                message={message}
                received={received} 
                read={read} />
            </>
          )) : <div>No email</div>
        }
      </EmailsContainer>
    </Container>
  )
}

const Container = styled.div``

const TopContainer = styled.div`
  padding-left: 20px;
  height: 50px;
`

const EmailsContainer = styled.div``