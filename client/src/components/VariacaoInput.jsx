import { useState } from 'react';
import '../assets/css/variacao.css'
import { TextField, Divider, Chip, Stack, Button } from "@mui/material";
import InputFileUpload from "./InputFileUpload";

const VariacaoInput = (props) => {
   
    const [nome, setNome] = useState("");
    const [files, setFiles] = useState([])

    const [sendingFiles, setSendingFiles] = useState(false)
    const [sendedFiles, setSendedFiles] = useState(false)
    const uploadFileHandler = (e) => {
        props.onAdd(props.id, null, e.target.files)
        setSendedFiles(true)
    }

    return (
        <Stack className="variacao-container" spacing={2}>
            <Divider textAlign="right" sx={{marginBottom: "20px"}}> <Chip label={"Variação " + (props.index + 1)}/></Divider>
            <TextField variant="outlined" label="Título da variação" className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                onChange={(e) => 
                    {
                        setNome(e.target.value)
                        props.onAdd(props.id, e.target.value, null)

                    }}
            ></TextField>

            <InputFileUpload handler={uploadFileHandler} loaded={sendedFiles} loading={sendingFiles} />

            <Button variant="outlined" color="error" onClick={() => props.onDelete(props.id)}>Excluir variação</Button>
            <Divider sx={{marginTop: "20px"}}></Divider>
        </Stack>  
    );
}

export default VariacaoInput;

