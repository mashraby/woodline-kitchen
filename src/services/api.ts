import axios, { AxiosError, AxiosResponse } from "axios";
import { IPerson } from "../interfaces/users.interfaces";

export const getUsers = (): Promise<Array<IPerson>> => {
  return axios
  .get("/user")
  .then((res: AxiosResponse) => res.data)
  .catch((err: AxiosError) => console.log(err));
};

export const postBalance = (
  id: string,
  amount: number | undefined,
  type: boolean
  ): Promise<AxiosResponse> => {
    console.log(amount, id);
    
  return axios
    .post("/user/balance", {  
      id,
      amount,
      type,
      date: "2023-02-12",
    })
};