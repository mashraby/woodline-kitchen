import React from "react"

export interface IAddRoleProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAddRoleContextProps {
    isClicked: boolean
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}