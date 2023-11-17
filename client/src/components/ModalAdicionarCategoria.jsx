import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modalpopup = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [nome, setNome] = useState("");
    const [slug, setSlug] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();

        axios.post(
            "http://localhost:8081/categoria/",
            {
                nome: nome,
                slug: slug
            }
        ).then(() => {
            window.location = "/dashboard/categorias"
        }).catch((err) => {
            toast.warn(err.response.data.msg)
        })
    }

    const slugFormat = (str) => {
        if(str.charAt(0) == " "){
            return "";
        }
        str = str.toLowerCase();
    
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Adicionar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Nova categoria  <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value); 
                                setSlug(slugFormat(e.target.value))
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="slug" className={slug !== "" ? "has-val input" : "input"}
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(slugFormat(e.target.value))}
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

export default Modalpopup;

