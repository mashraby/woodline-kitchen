interface IRole {
    title: string
    _id: string
}

export interface IPerson {
    _id: string
    fullname: string
    phone_number: string
    telegram_id: number
    balance: number
    is_active: boolean
    role: IRole
}

export interface MiniDrawerProps {
    users?: IPerson[];
}

export interface IRow {
    id: number
    fullname: string
    phone_number: string
    telegram_id: number
    balance: number
}

export interface IOpenModalProps {
    open: boolean
    setOpen: (newOpen: boolean) => void
    text: string
    balance?: number
}