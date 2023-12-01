import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const ModalInfo = ({label, title, content}) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    return (
        <div style={{ textAlign: 'center', width: '100%'}}>
            <Button onClick={functionopenpopup} color="primary" variant="outlined" sx={{ width: '100%' }}>{label}</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>{title} <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                   {content}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ModalInfo;