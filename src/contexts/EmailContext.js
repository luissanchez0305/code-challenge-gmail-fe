import React, { createContext, useEffect, useReducer, useState } from 'react';
import { emailReducer } from '../reducer/emailReducer';
import localDB, { endpoints } from '../api/local'

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
    const [emails, dispatch] = useReducer(emailReducer, [])

    async function getData() {
        const res = await localDB.get(endpoints.getAll);
        dispatch({type: 'ADD_EMAILS', emails: res.data})
      }
    
      useEffect(() => {
        getData()
      }, [])

    return (
        <EmailContext.Provider value={{emails, dispatch}}>
            {props.children}
        </EmailContext.Provider>
    )
}

export default EmailContextProvider