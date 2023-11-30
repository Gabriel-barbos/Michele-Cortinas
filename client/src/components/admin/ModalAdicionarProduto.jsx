import { Button, Checkbox, Link, Dialog, DialogActions, DialogContent, FormControl, InputLabel, Select, DialogTitle, MenuItem, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputFileUpload from "./InputFileUpload";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VariacaoInput from "./VariacaoInput";

const ModalPopup = (props) => {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
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
    
    
    const [files, setFiles] = useState([]);
    const [variacoes, setVariacoes] = useState([]);

    const uploadFileHandler = (e) => {
        setFiles(e.target.files);
        setSendedFiles(true)
    }

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
        formData.append("variacoes", JSON.stringify({variacoes: variacoes}))
        
        axios.post(
            "http://localhost:8081/produto/",
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

    const addVariacaoHandler = () => {
        setVariacoes(variacoes => [...variacoes, {id: variacoes.length, titulo: "", cor: ""}])
    }

    const deleteVariacaoHandler = (id) => {
        setVariacoes(variacoes.filter(v => v.id != id));
    }

    const applyVariacaoHandler = (id, titulo, cor) => {
        const variacaoIndex = variacoes.findIndex(v => v.id == id);
        let variacoesCopy = [...variacoes];
        variacoesCopy[variacaoIndex] = {id: id, titulo: titulo || variacoesCopy[variacaoIndex].titulo, cor: cor || variacoesCopy[variacaoIndex].cor }
        setVariacoes(variacoesCopy);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <ToastContainer />
            <Button onClick={(functionopenpopup)} color="primary" variant="contained">Adicionar</Button>
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

                        <InputFileUpload handler={uploadFileHandler} loaded={sendedFiles} loading={sendingFiles} />

                        <h3>Variações</h3>
                        <Stack spacing={1} className="variacoes-container">
                            {variacoes.map((v, i) => {
                                return <VariacaoInput index={i} id={v.id} onAdd={applyVariacaoHandler} onDelete={deleteVariacaoHandler} />
                            })}
                        </Stack>
                        <Button onClick={addVariacaoHandler} variant="outlined" startIcon={<AddCircleOutlineIcon />}>Adicionar variação</Button>
                        <Button onClick={submitHandler} color="primary" variant="contained" disabled={categorias.length <= 0}>Cadastrar</Button>
                        {categorias.length <= 0 && <p style={{display: 'flex', alignItems: 'center', gap: '4px'}}><ErrorOutlineOutlinedIcon />Nenhuma categoria disponível, <Link href="categorias">cadastre uma categoria</Link></p>}
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalPopup;

