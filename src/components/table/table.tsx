import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { IPerson, MiniDrawerProps } from "../../interfaces/users.interfaces";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullname", headerName: "Full name", width: 130 },
  {
    field: "telegram_id",
    headerName: "Telegram ID",
    type: "number",
    width: 90,
  },
  {
    field: "phone_number",
    headerName: "Phone number",
    width: 130,
  },
  {
    field: "balance",
    headerName: "Balance",
    type: "number",
  },
];

export const BasicTable: React.FC<MiniDrawerProps> = (props) => {
  const rows = []
  const users: IPerson[] = props.users as any;

  users.forEach((e, i) => {
    rows.push({
      id: i + 1,
      fullname: e.fullname
    })
  })  

  return (
    <div style={{ height: 540, width: "100%" }}>
      <DataGrid
        rows={[...users]}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
