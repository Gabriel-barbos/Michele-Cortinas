import { IconButton } from '@mui/material';
import '../../assets/css/carrinho.css'
import CloseIcon from '@mui/icons-material/Close';

const Carrinho = ({show, closeHandle}) => {
    return(
    <div className={`carrinho-container ${show ? "open" : ""}`}>
        <div className="carrinho-container-header">
            <IconButton onClick={closeHandle}>
                <CloseIcon />
            </IconButton>
            <h1>Carrinho</h1>
        </div>
    </div>)
}

export default Carrinho