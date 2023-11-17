import { Button, Checkbox, Link, Dialog, DialogActions, DialogContent, FormControl, InputLabel, Select, DialogTitle, MenuItem, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputFileUpload from "./InputFileUpload";

const ModalPopup = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    let formData = new FormData();    //formdata object

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState(""); 
    const [categoriaId, setCategoriaId] = useState("");
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/categoria/")
        .then(({ data }) => {
            setCategorias(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    const [sendingFiles, setSendingFiles] = useState(false)
    const [sendedFiles, setSendedFiles] = useState(false)

    const uploadFileHandler = (e) => {
        const files = e.target.files;

        for(let file of files){
            formData.append("file", file);
        }

        setSendedFiles(true)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        setSendingFiles(true)

        formData.append("nome", nome)
        formData.append("preco", preco)
        formData.append("descricao", descricao)
        formData.append("categoria", categoria)

        axios.post(
            "http://localhost:8081/produto/",
            formData,
            { 
                headers: {
                    "Content-Type": "multipart/form-data"
                } 
            }
        ).then((response) => {
            // window.location = "/dashboard/categorias"
            console.log(response)
            setSendingFiles(false)
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
                    <Stack spacing={2}>
                        <TextField variant="outlined" label="Nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Preco" className={preco !== "" ? "has-val input" : "input"}
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined"
                        multiline
                        rows={4}
                        label="Descrição" 
                        className={descricao !== "" ? "has-val input" : "input"}
                            type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        >
                        </TextField>
                        <FormControl fullWidth>
                            <InputLabel id="image-upload-select-label">Categoria</InputLabel>
                            <Select
                                labelId="image-upload-select-label"
                                id="image-upload-select"
                                value={categoria}
                                onChange={(e) => {
                                    setCategoria(e.target.value);
                                }}
                                label="Categoria"
                                disabled={categorias.length <= 0}
                            >
                
                                {categorias.map((v) => {return <MenuItem value={v.id}>{v.nome}</MenuItem>})}
                            </Select>
                            {categorias.length <= 0 && <p>Nenhuma categoria disponível, <Link href="categorias">cadastre uma categoria</Link></p>}
                        </FormControl>
                        <InputFileUpload handler={uploadFileHandler} loaded={sendedFiles} loading={sendingFiles} />
                        <Button onClick={submitHandler} color="primary" variant="contained">Cadastrar</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalPopup;

