import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdicionarProdutoModal = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [Nome, setNome] = useState("");
    const [Preco, setPreco] = useState("");
    const [Descricao, setDesc] = useState("");
    const [Cores, setCores] = useState("")
    const [Material, setMaterial] = useState("")



    const submitHandler = async (e) => {
        e.preventDefault();

        axios.post(
            "http://localhost:8081/produto/",
            {
                Nome: Nome,
                Preco: Preco,
                Descricao: Descricao,
                Cores: Cores,
                Material: Material
            }
        ).then(() => {
            window.location = "/dashboard/produtos"
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
                        <TextField variant="outlined" label="Nome" className={Nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={Nome}
                            onChange={(e) => setNome(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Preço" className={Preco !== "" ? "has-val input" : "input"}
                            type="text"
                            value={Preco}
                            onChange={(e) => setPreco(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Descrição" className={Descricao !== "" ? "has-val input" : "input"}
                            type="text"
                            value={Descricao}
                            onChange={(e) => setDesc(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Cores" className={Cores !== "" ? "has-val input" : "input"}
                            type="text"
                            value={Cores}
                            onChange={(e) => setCores(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Material" className={Material !== "" ? "has-val input" : "input"}
                            type="text"
                            value={Material}
                            onChange={(e) => setMaterial(e.target.value)}
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

export default AdicionarProdutoModal;