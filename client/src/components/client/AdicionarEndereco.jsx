import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdicionarEndereco(props) {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    
    const [nome, setNome] = useState("")
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        // return console.log(props.clienteId)

        axios.post(
            "http://localhost:8081/cliente/endereco/",
            {
                nome: nome,
                rua: rua,
                cep: cep,
                cidade: cidade,
                bairro: bairro,
                complemento: complemento,
                clienteId: props.clienteId
            }
        ).then(() => {
            window.location = "/painel/enderecos"
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
                        <TextField variant="outlined" label="Nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Rua" className={rua !== "" ? "has-val input" : "input"}
                            type="text"
                            value={rua}
                            onChange={(e) => {
                                setRua(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Cep" className={cep !== "" ? "has-val input" : "input"}
                            type="number"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Cidade" className={cidade !== "" ? "has-val input" : "input"}
                            type="text"
                            value={cidade}
                            onChange={(e) => {
                                setCidade(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Bairro" className={bairro !== "" ? "has-val input" : "input"}
                            type="text"
                            value={bairro}
                            onChange={(e) => {
                                setBairro(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Complemento" className={complemento !== "" ? "has-val input" : "input"}
                            type="text"
                            value={complemento}
                            onChange={(e) => {
                                setComplemento(e.target.value); 
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

