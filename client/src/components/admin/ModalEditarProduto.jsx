import { Button, Checkbox, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageItemGallery from "./ImageItemGallery";
import InputFileUpload from "./InputFileUpload";

const ModalEditar = (props) => {
    const [open, openchange] = useState(false);
    
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
        window.location = "/dashboard/produtos"
    }

    const uploadFileHandler = (e) => {
        setFiles(e.target.files);
        setSendedFiles(true)
    }

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('')
    const [categoriaId, setCategoriaId] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [imagens, setImagens] = useState([])
    const [sendingFiles, setSendingFiles] = useState(false)
    const [sendedFiles, setSendedFiles] = useState(false)
    
    
    const [files, setFiles] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8081/categoria/")
        .then(({ data }) => {
            setCategorias(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData();    //formdata object

        setSendingFiles(true)
        
        for(let file of files) {
            formData.append("file", file)
        }

        formData.append("nome", nome)
        formData.append("preco", preco)
        formData.append("descricao", descricao)
        formData.append("categoria", categoria)

        console.log(formData.get("nome"))
        
        axios.put(
            "http://localhost:8081/produto/" + props.id,
            formData,
            { 
                headers: {
                    "Content-Type": "multipart/form-data"
                } 
            }
        ).then((response) => {
            console.log(response)
            window.location = "/dashboard/produtos"
            setSendingFiles(false)
        }).catch((err) => {  
            toast.warn(err.response.data.msg)
            setSendingFiles(false)
        })
    }
    
    useEffect(() => {
        axios.get(
            `http://localhost:8081/produto/${props.id}`
        ).then(({data}) => {
            setNome(data.nome);
            setDescricao(data.descricao)
            setPreco(data.preco)
            setCategoria(data.categoria)
            setImagens(data.imagens)
        })
    }, [props.id])

    
    
    return (
        <div style={{ textAlign: 'center', width: '100%'}}>
            <Button onClick={functionopenpopup} color="primary" variant="contained" sx={{ width: '100%' }}>Editar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Editar {props.name} <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                    <TextField variant="outlined" label="Nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Preco" className={preco !== "" ? "has-val input" : "input"}
                            type="number"
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
                
                                {categorias.map((v) => {return <MenuItem value={v.id}>{v.titulo}</MenuItem>})}
                            </Select>
                            
                        </FormControl>
                        {imagens.length > 0 && <ImageItemGallery images={imagens} />}
                        <InputFileUpload handler={uploadFileHandler} loaded={sendedFiles} loading={sendingFiles} />
                        <Button onClick={submitHandler} color="primary" variant="contained">Atualizar</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalEditar;