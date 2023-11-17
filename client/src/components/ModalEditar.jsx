import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalEditar = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [titulo, setTitulo] = useState('');
    const [slug, setSlug] = useState('');
    
        const submitHandler = async (e) => {
            e.preventDefault();
            axios.put(
                `http://localhost:8081/categoria/${props.id}`,
                {
                    titulo: titulo,
                    slug: slug
                }
            ).then(() => {
                window.location = "/dashboard/categorias"
            })
        }
    
    
    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Editar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Editar {props.name} <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="titulo" className={titulo !== "" ? "has-val input" : "input"}
                            type="text"
                            value={titulo}
                            onChange={(e) => { setTitulo(e.target.value) }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="slug" className={slug !== "" ? "has-val input" : "input"}
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
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

export default ModalEditar;