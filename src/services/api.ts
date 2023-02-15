import axios, { AxiosResponse } from "axios";
import { IRole } from "../interfaces/roles.interfaces";
import { IPerson } from "../interfaces/users.interfaces";

export const login = (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  return axios.post("/", {
    username,
    password,
  });
};

export const getUsers = (): Promise<Array<IPerson>> => {
  return axios.get("/user")
    .then(res => res.data)
};

export const postBalance = (
  id: string,
  amount: number | undefined,
  type: boolean
): Promise<AxiosResponse> => {
  return axios.post("/user/balance", {
    id,
    amount,
    type,
    date: "2023-02-12",
  });
};

export const getRoles = (): Promise<Array<IRole>> => {
  return axios.get("/role") 
    .then(res => res.data)
};

export const postRole = (title: string): Promise<AxiosResponse> => {
  return axios.post("/role", {
    title
  })
}