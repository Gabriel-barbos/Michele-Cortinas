import { useState } from 'react';
import '../../assets/css/variacao.css'
import { TextField, Divider, Chip, Stack, Button } from "@mui/material";

const VariacaoInput = (props) => {
   
    const [nome, setNome] = useState("");
    const [color, setColor] = useState('#ffffff')

    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }

    const inputColor = () => {
        props.onAdd(props.id, null, color)
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

            <div className="variacao-cor-container">
                <h4>Cor:</h4>        
                <input type="color" value={color} onChange={handleChangeColor} onInput={inputColor} />
            </div>
            <Button variant="outlined" color="error" onClick={() => props.onDelete(props.id)}>Excluir variação</Button>
            <Divider sx={{marginTop: "20px"}}></Divider>
        </Stack>  
    );
}

export default VariacaoInput;

