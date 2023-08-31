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

export type imageProps = {
    fileName: string,
    filePath: string
}

export type FileProps = {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
}[]