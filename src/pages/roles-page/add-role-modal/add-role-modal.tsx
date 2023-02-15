import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { TextField, Typography } from "@mui/material";
import { IAddRoleProps } from "../../../interfaces/addrole.interfaces";
import { postRole } from "../../../services/api";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { ReloadContext } from "../../../context/reload.context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddRoleModal: React.FC<IAddRoleProps> = (props) => {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState<string>("");
  const { reload, setReload } = useContext(ReloadContext);

  const createRole = (): void => {
    setReload(!reload);
    postRole(title)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          toast.success("Role yaratildi!");
        }
      })
      .finally((): void => {
        setReload(!reload);
        setOpen(false);
      })
      .catch((err: AxiosError) => {
        if (err) {
          toast.error("Role yaratilmadi qayta urinib ko'ring");
        }
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h4"
              component="div"
            >
              Add Role
            </Typography>
            <TextField
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                setTitle(e.target.value);
              }}
              sx={{ my: 2, width: "100%" }}
              id="outlined-basic"
              label="Write a role title"
              variant="outlined"
            />
            <Button
              onClick={createRole}
              sx={{ width: "100%" }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Add Role
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
