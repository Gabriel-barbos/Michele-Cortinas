import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalExcluir = ({type}) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }



    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="error" variant="contained">Excluir</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Deseja excluir {type}? <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <Button onClick={closepopup} color="primary" variant="contained">Cancelar</Button>
                        <Button onClick={closepopup} color="error" variant="contained">Excluir</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalExcluir;