import React, { useContext, useState } from 'react'
import { EmailContext } from '../../contexts/EmailContext'
import styled from 'styled-components'
import localDB, { endpoints } from '../../api/local'

const EmailForm = (props) => {
    const { dispatch } = useContext(EmailContext);
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localDB.post(endpoints.newEmail, {
            from,
            subject,
            message,
            received: Date.now(),
        })
        dispatch({type: 'ADD_EMAIL', email: {
            from, subject, message, received: Date.now()
        }})
        setFrom('')
        setSubject('')
        setMessage('');
    }
  return (
    <Popup>
        <Box>
            <Close onClick={props.handleClose}>
                x
            </Close>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='email from' value={from} onChange={(e) => setFrom(e.target.value)} required /><br/>
                <input type="text" placeholder='email subject' value={subject} onChange={(e) => setSubject(e.target.value)} required /><br/>
                <input type="text" placeholder='email message' value={message} onChange={(e) => setMessage(e.target.value)} required /><br/>
                <input type="submit" value="send email" />
            </form>
        </Box>
    </Popup>
  )
}

export default EmailForm

const Popup = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index:10000;
`

const Box = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
`

const Close = styled.span`
    content: 'x';
    cursor: pointer;
    position: fixed;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
`

