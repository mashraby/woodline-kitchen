import axios, { AxiosError, AxiosResponse } from "axios";
import { IPerson } from "../interfaces/users.interfaces";

export const getUsers = (): Promise<Array<IPerson>> => {
    return axios.get("/user")
        .then((res: AxiosResponse) => res.data)
        .catch((err: AxiosError) => console.log(err))
}

export const postBalance = (...params: any): void => {
    axios.post("/user/balance", {
        id: params.id,
        amount: params.amount
    })
    .then((res: AxiosResponse) => console.log(res))
    .catch((err: AxiosError) => console.log(err))
}