import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GerarRelatorio() {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [maisVendCategoria, setMaisVendCategoria] = useState("");
    const [ticketMedio, setTicketMedio] = useState("");
    const [qtdPedidosRealizados, setQtdPedidosRealizados] = useState("");
    const [qtdPedidosIncompletos, setQtdPedidosIncompletos] = useState("");
    const [qtdPedidosFinalizados, setQtdPedidosFinalizados] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

    
        axios.post(
            "http://localhost:8081/relatorio/",
            {
                maisVendCategoria: maisVendCategoria,
                ticketMedio: ticketMedio,
                qtdPedidosRealizados: qtdPedidosRealizados,
                qtdPedidosIncompletos: qtdPedidosIncompletos,
                qtdPedidosFinalizados: qtdPedidosFinalizados
            }
        ).then(() => {
            window.location = "/dashboard/relatorios"
        }).catch((err) => {
            toast.warn(err.response.data.msg)
        })
    }

    
    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Gerar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Novo Relatório <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="Categoria mais vendida" className={maisVendCategoria !== "" ? "has-val input" : "input"}
                            type="text"
                            value={maisVendCategoria}
                            onChange={(e) => {
                                setMaisVendCategoria(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Ticket Médio" className={ticketMedio !== "" ? "has-val input" : "input"}
                            type="double"
                            value={ticketMedio}
                            onChange={(e) => {
                                setTicketMedio(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Pedidos Realizados" className={qtdPedidosRealizados !== "" ? "has-val input" : "input"}
                            type="number"
                            value={qtdPedidosRealizados}
                            onChange={(e) => setQtdPedidosRealizados(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Pedidos Incompletos" className={qtdPedidosIncompletos !== "" ? "has-val input" : "input"}
                            type="number"
                            value={qtdPedidosIncompletos}
                            onChange={(e) => {
                                setQtdPedidosIncompletos(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Pedidos Finalizados" className={qtdPedidosFinalizados !== "" ? "has-val input" : "input"}
                            type="number"
                            value={qtdPedidosFinalizados}
                            onChange={(e) => {
                                setQtdPedidosFinalizados(e.target.value); 
                            }}
                        >
                        </TextField>
                       
                        <Button onClick={submitHandler} color="primary" variant="contained">Enviar</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}