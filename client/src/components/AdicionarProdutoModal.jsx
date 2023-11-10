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

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDesc] = useState("");
    const [cores, setCores] = useState("")
    const [material, setMaterial] = useState("")



    const submitHandler = async (e) => {
        e.preventDefault();

        axios.post(
            "http://localhost:8081/produto/",
            {
                nome: nome,
                preco: preco,
                descricao: descricao,
                cores: cores,
                material: material
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
                        <TextField variant="outlined" label="Nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Preço" className={preco !== "" ? "has-val input" : "input"}
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Descrição" className={descricao !== "" ? "has-val input" : "input"}
                            type="text"
                            value={descricao}
                            onChange={(e) => setDesc(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Cores" className={cores !== "" ? "has-val input" : "input"}
                            type="text"
                            value={cores}
                            onChange={(e) => setCores(e.target.value)}
                        >
                        </TextField>

                        <TextField variant="outlined" label="Material" className={material !== "" ? "has-val input" : "input"}
                            type="text"
                            value={material}
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