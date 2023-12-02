import { Button, Checkbox, Dialog, DialogActions, DialogContent, ListItemText, ListItemButton, DialogContentText, DialogTitle, FormControlLabel, IconButton, List, ListItem, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
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
            <ToastContainer />
            <Button onClick={functionopenpopup} color="primary" variant="outlined" sx={{ width: '100%' }}>{label}</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>{title} <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>

                   {typeof content == 'object' && 
                    <List>
                            {content.map((v) => (
                                    <ListItemButton component="a" onClick={() => {
                                        navigator.clipboard.writeText(v.numero);
                                        toast.success("Número copiado com sucesso")
                                    }}>
                                        <ListItemText primary={v.numero} />
                                    </ListItemButton>
                            ))}
                    </List>
                   }
                   
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ModalInfo;