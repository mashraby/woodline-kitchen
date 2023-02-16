import React, { useContext, useEffect, useState } from "react";
import { MiniDrawer } from "../../components/sidebar/sidebar";
import { ReloadContext } from "../../context/reload.context";
import { IPerson } from "../../interfaces/users.interfaces";
import { getUsers } from "../../services/api";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FoodsTable } from "./foods-table/foods-table";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const FoodsPage: React.FC = () => {
  const [users, setUsers] = useState<IPerson[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { reload } = useContext(ReloadContext);

  useEffect((): void => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, [reload]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, px: 3, py: 12 }}>
          <FlexWrapper>
            <Typography variant="h4" component="h2">
              Foods
            </Typography>
            <Button
              onClick={(): void => setOpen(true)}
              variant="contained"
              endIcon={<AddCircleOutlineIcon />}
            >
              Add Food
            </Button>
          </FlexWrapper>
          <FoodsTable />
        </Box>
      </Box>
    </>
  );
};
