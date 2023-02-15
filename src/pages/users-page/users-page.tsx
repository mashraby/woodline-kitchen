import React, { useContext, useEffect, useState } from "react";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { ReloadContext } from "../../context/reload.context";
import { IPerson } from "../../interfaces/users.interfaces";
import { getUsers } from "../../services/api";
import { UsersTable } from "./users-table/users-table";
import Box from "@mui/material/Box";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);
  const { reload } = useContext(ReloadContext);

  useEffect((): void => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, [reload]);

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer />
      <Box component="main" sx={{ flexGrow: 1, px: 3, py: 12 }}>
        <UsersTable users={users} />
      </Box>
    </Box>
  );
};
