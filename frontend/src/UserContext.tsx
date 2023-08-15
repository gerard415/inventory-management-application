
import {createContext, useEffect, useState} from 'react'
import { UserProps } from './types'

export const UserContext  = createContext<UserProps>({} as UserProps)

type UserContextProviderProps = {
    children: React.ReactNode

}

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setUser(JSON.parse(loggedInUser));
        console.log(user)
        }
        
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider