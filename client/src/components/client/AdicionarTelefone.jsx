import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdicionarTelefone() {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    
    const [telefone, setTelefone] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();

        // return console.log(props.clienteId)

        axios.post(
            "http://localhost:8081/cliente/telefone/",
            {
                telefone: telefone,
                clienteId: props.clienteId
            }
        ).then(() => {
            window.location = "/painel/telefones"
        }).catch((err) => {
            console.log(err.response)
        })
    }
    
    return (
      
   
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Adicionar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Novo Endereço <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="Telefone" className={telefone !== "" ? "has-val input" : "input"}
                            type="number"
                            value={telefone}
                            onChange={(e) => {
                                setTelefone(e.target.value); 
                            }}
                        >
                        </TextField>
        
                        <Button onClick={submitHandler} color="primary" variant="contained">Cadastrar</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    
    );
}