import '../assets/css/editarPerfil.css'
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

    export function EditarPerfil() {
        return(
            <>
            <header className="list-header"></header>
            <h1>Editar Perfil</h1>

      <h2 className="atualizarInfo">Atualizar Informações</h2>
      <TextField
        className="inputUser"
        color="primary"
        label="Insira seu novo usuario"
        placeholder="exemplo@gmal.com"
        sx={{ width: 313 }}
        variant="filled"
      />
      <TextField
        className="inputTel"
        color="primary"
        label="Atualizar Telefone"
        placeholder="+55 (11) 12345-6789"
        sx={{ width: 313 }}
        variant="filled"
      />
      <TextField
        className="inputSenha"
        color="primary"
        label="DIgite sua nova Senha"
        placeholder="Nova Senha"
        sx={{ width: 313 }}
        variant="filled"
      />
      <button className="savebtn">
        <div className="salvar">Salvar</div>
      </button>
    
            </>
        )
    }