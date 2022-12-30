import React, {useContext, useState} from 'react'
import styled from 'styled-components'

import { Checkbox } from '@material-ui/core/'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import IconButton from '@material-ui/core/IconButton'
import localDB, { endpoints } from '../../api/local'
import { EmailContext } from '../../contexts/EmailContext'

function EmailItem({ id, starred, from, subject, message, received, read }) {

    const { dispatch } = useContext(EmailContext);
    const [star, setStar ] = useState(starred)
    const [readView, setRead ] = useState(read)
    const handleStar = async (e, starModified, id) => {
        e.preventDefault()
        await localDB.put(endpoints.updateEmail(id), {
            read,
            starred: starModified
        })
        dispatch({type: 'EDIT_EMAIL', id, read, starred: starModified})
        setStar(starModified)
    }
    const handleRead = async (e, readModified, id) => {
        e.preventDefault()
        if(!readView){
            await localDB.put(endpoints.updateEmail(id), {
                read: readModified,
                starred
            })
            dispatch({type: 'EDIT_EMAIL', id, read: readModified, starred})
            setRead(readModified)
        }
    }
  return (
    <Container onClick={(e) => handleRead(e, true, id)}>
        <Checkbox />
        <IconButton onClick={(e) => handleStar(e, !star, id)}>
            {
                star ? (
                    <StarIcon htmlColor='#f7cb69' />
                ) : (
                    <StarBorderIcon />
                )
            }
        </IconButton>

        <p className={ !readView && 'unread' }>{from}</p>

        <div>
            <p className={ !readView && 'unread' }>{subject}</p> - <span>{message}</span>
        </div>

        <p className={ !readView && 'unread' }>{received}</p>

    </Container>
  )
}

export default EmailItem

const Container = styled.div`
    padding-left: 20px;
    border-top: 1px solid lightgray;
    display: grid;
    grid-template-columns: min-content min-content 120px auto 50px;
    gap: 10px;
    align-items: center;
    cursor: pointer;

    div {
        display: flex;
        span {
            color: darkgray;
        }
    }

    .unread {
        color: black;
        font-weight: bolder;
    }
`