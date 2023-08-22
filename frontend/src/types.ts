export type UserProps = {
    user: {
        name?: string,
        token?: string
    } | null,
    setUser: React.Dispatch<React.SetStateAction<userStateProps | null>>,
    ready: boolean,
}

export type userStateProps = {
    name: string,
    token: string
}