import React, { useEffect, useState } from "react";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { IPerson } from "../../interfaces/users.interfaces";
import { getUsers }  from "../../services/api"
import { CustomizedTables } from "../users-page/users-table/users-table";
import styled from "styled-components"
const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  return (<PageWrapper>
    <MiniDrawer />
    <CustomizedTables users={users} />
  </PageWrapper>);
};