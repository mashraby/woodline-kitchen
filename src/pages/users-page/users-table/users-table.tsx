import { useState } from "react";
// import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import {
  IPerson,
  IRow,
  MiniDrawerProps,
} from "../../../interfaces/users.interfaces";
import { BasicModal } from "../change-balance-modal/change-balance-modal";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "fullname", headerName: "Full name", width: 130 },
//   {
//     field: "telegram_id",
//     headerName: "Telegram ID",
//     width: 90,
//   },
//   {
//     field: "phone_number",
//     headerName: "Phone number",
//     width: 130,
//   },
//   {
//     field: "balance",
//     headerName: "Balance",
//     type: "number",
//   }
// ];

// export const BasicTable: React.FC<MiniDrawerProps> = (props) => {
//   const rows: IRow[] = []
//   const users: IPerson[] = props.users as any;
//   const [open, setOpen] = useState(false)
//   const [text, setText] = useState("")
//   const [userId, setUserId] = useState("")

//   users?.forEach((e, i) => {
//     rows.push({
//       id: i + 1,
//       user_id: e._id,
//       fullname: e.fullname,
//       phone_number: e.phone_number,
//       telegram_id: e.telegram_id
//     })
//   })

//   const handleRowClick: GridEventListener<'rowClick'> = (params) => {
//     setOpen(true)
//     setText(params.row.fullname)
//     setUserId(params.row.user_id)
//   };

//   return (
//     <>
//       <BasicModal open={open} setOpen={setOpen} text={text} userId={userId}  />

//       <div style={{ height: 540, width: "100%" }}>
//         <DataGrid
//           onRowClick={handleRowClick}
//           rows={rows}
//           columns={columns}
//           pageSize={8}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//         />
//       </div>
//     </>
//   );
// };

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export const CustomizedTables: React.FC<MiniDrawerProps> = (props) => {
  const rows: IRow[] = [];
  const users: IPerson[] = props.users as any;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");

  users?.forEach((e, i) => {
    rows.push({
      id: i + 1,
      user_id: e._id,
      fullname: e.fullname,
      phone_number: e.phone_number,
      telegram_id: e.telegram_id,
    });
  });

  const handleRowClick = (user: IPerson): void => {
    setOpen(true);
    setText(user.fullname);
    setUserId(user._id);
  };

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} text={text} userId={userId} />
      <TableContainer sx={{ flexGrow: 1, p: 3 }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Full Name</StyledTableCell>
              <StyledTableCell align="right">Telegram ID</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Balance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, index) => (
              <StyledTableRow
                onClick={() => handleRowClick(user)}
                key={user._id}
              >
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{user.fullname}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.telegram_id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.phone_number}
                </StyledTableCell>
                <StyledTableCell align="right">{user.balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
