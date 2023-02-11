import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { IPerson } from "../../interfaces/users.interfaces";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);

  useEffect((): void => {
    axios.get("/user").then((res: AxiosResponse): void => {
      setUsers(res.data);
    });
  }, []);

  return <MiniDrawer users={users} />;
};