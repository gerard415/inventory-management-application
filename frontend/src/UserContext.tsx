
import {createContext, useEffect, useState} from 'react'
import { UserProps, userStateProps } from './types'

export const UserContext: React.Context<UserProps>  = createContext({} as UserProps)

type UserContextProviderProps = {
    children: React.ReactNode

}

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<userStateProps | null>(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
        setReady(true);
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider