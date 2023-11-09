import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdicionarCategoriaModal = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [titulo, setTitulo] = useState("");
    const [slug, setSlug] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();

        axios.post(
            "http://localhost:8081/categoria/",
            {
                titulo: titulo,
                slug: slug
            }
        ).then(() => {
            window.location = "/dashboard/categorias"
        }).catch((err) => {
            toast.warn(err.response.data.msg)
        })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Adicionar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Novo Produto  <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="titulo" className={titulo !== "" ? "has-val input" : "input"}
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
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

export default AdicionarCategoriaModal;