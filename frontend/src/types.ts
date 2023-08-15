export type UserProps = {
    user: {
        name?: string,
        token?: string
    },
    setUser: React.Dispatch<React.SetStateAction<{}>>
}