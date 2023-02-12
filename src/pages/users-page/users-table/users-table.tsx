import React, { useState } from "react";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { IPerson, IRow, MiniDrawerProps } from "../../../interfaces/users.interfaces";
import { BasicModal } from "../change-balance-modal/change-balance-modal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullname", headerName: "Full name", width: 130 },
  {
    field: "telegram_id",
    headerName: "Telegram ID",
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
  }
];

export const BasicTable: React.FC<MiniDrawerProps> = (props) => {
  const rows: IRow[] = []
  const users: IPerson[] = props.users as any;
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const [balance, setBalance] = useState()

  users?.forEach((e, i) => {
    rows.push({
      id: i + 1,
      fullname: e.fullname,
      phone_number: e.phone_number,
      telegram_id: e.telegram_id,
      balance: e.balance
    })
  })

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    setOpen(true)
    setText(params.row.fullname)
    setBalance(params.row.balance)
  };

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} text={text} balance={balance}  />
      <div style={{ height: 540, width: "100%" }}>
        <DataGrid
          onRowClick={handleRowClick}
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};