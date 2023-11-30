import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Tooltip, IconButton } from '@mui/material';
import { useState } from 'react';
import Carrinho from './Carrinho';

const CarrinhoButton = () => {
    const [showCarrinho, setShowCarrinho] = useState(false);

    return(
    <>
        <Tooltip title="Carrinho">
            <IconButton onClick={() => setShowCarrinho(true)}>
                <ShoppingCartOutlinedIcon />
            </IconButton>
        </Tooltip>

        <Carrinho show={showCarrinho} closeHandle={() => setShowCarrinho(false)} />
    </>)
}

export default CarrinhoButton