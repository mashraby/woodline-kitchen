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