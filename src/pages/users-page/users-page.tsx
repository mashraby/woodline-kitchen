import React, { useContext, useEffect, useState } from "react";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { BalanceContext } from "../../context/change-balance-context";
import { IPerson } from "../../interfaces/users.interfaces";
import { getUsers } from "../../services/api";
import { CustomizedTables } from "./users-table/users-table";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);
  const { isClicked } = useContext(BalanceContext);

  useEffect((): void => {
    console.log(isClicked);
    getUsers().then((data) => setUsers(data));
  }, [isClicked]);

  return (
    <>
      <MiniDrawer />
      <CustomizedTables users={users} />
    </>
  );
};