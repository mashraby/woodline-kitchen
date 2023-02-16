export interface IFood {
    _id: string
    name: string
    cost: number
    category: string
}

export interface IFoodProps {
    foods: IFood[] 
}

export interface IAddFoodProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}