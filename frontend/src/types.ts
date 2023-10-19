export type UserProps = {
    user: userStateProps | null,
    setUser: React.Dispatch<React.SetStateAction<userStateProps | null>>,
    ready: boolean,
    redirect: boolean,
    setRedirect: React.Dispatch<React.SetStateAction<boolean>>,
}

export type userStateProps = {
    name: string,
    email: string,
    id: string,
    phone?: number,
    bio?: string
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

export type productProps = {
    name: string,
    category: 'electronics' | 'stationery'| 'cosmestics and personal hygiene'| 'household'| 'textiles'| 'medical'| 'vehicle'| 'canned food' | 'glass',
    quantity: number,
    price: number,
    description: string,
    images: imageProps[],
    createdAt: string
    _id: string
}