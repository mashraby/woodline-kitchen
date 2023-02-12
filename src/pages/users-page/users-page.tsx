import React, { useEffect, useState } from "react";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { IPerson } from "../../interfaces/users.interfaces";
import { getUsers }  from "../../services/api"

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);
  
  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  return <MiniDrawer users={users} />;
};