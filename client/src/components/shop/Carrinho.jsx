import { IconButton, Stack, Tooltip, Badge  } from '@mui/material';
import '../../assets/css/carrinho.css'
import CloseIcon from '@mui/icons-material/Close';
import ProdutoCarrinhoCard from './ProdutoCarrinhoCard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState, useEffect } from 'react';

export const CarrinhoButton = () => {
    const [showCarrinho, setShowCarrinho] = useState(false);
    const [itensNoCarrinho, setItensNoCarrinho] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).products : []) 
   
    return( 
    <>
        <Tooltip title="Carrinho">
            <IconButton onClick={() => setShowCarrinho(true)}>
                <Badge badgeContent={itensNoCarrinho.length} color="secondary">
                        <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>
        </Tooltip>

        <Carrinho show={showCarrinho} changeHandle={() => {setItensNoCarrinho(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).products : [])}} closeHandle={() => setShowCarrinho(false)} />
    </>)
}

export const Carrinho = ({show, changeHandle, closeHandle}) => {
    const [carrinho, setCarrinho] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).products : []);

    const deleteHandle = (index) => {
        const oldCarrinho = JSON.parse(localStorage.getItem("cart")).products
        let newCarrinho = oldCarrinho.filter((p, i) => {
            return (i != index)
        })
        localStorage.setItem("cart", JSON.stringify({products: newCarrinho}))
        setCarrinho(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).products : [])
        changeHandle()
    }

    return(
    <div className={`carrinho-container ${show ? "open" : ""}`}>
        <div className="carrinho-container-header">
            <IconButton onClick={closeHandle}>
                <CloseIcon />
            </IconButton>
            <h1>Carrinho</h1>
        </div>
        <Stack spacing={1}>
            {carrinho.map((produto, index) => {
                return <ProdutoCarrinhoCard produto={produto} onDelete={deleteHandle} index={index} />
            })}
        </Stack>
    </div>)
}
