import { IconButton, Stack, Tooltip, Badge  } from '@mui/material';
import '../../assets/css/carrinho.css'
import CloseIcon from '@mui/icons-material/Close';
import ProdutoCarrinhoCard from './ProdutoCarrinhoCard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useJwt } from 'react-jwt';

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
    const token = sessionStorage.getItem("token_client")

    const { decodedToken, isExpired } = useJwt(token);

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

    const checkoutHandle = () => {
        if(!token){
            return toast.warn("Você deve estar logado para fazer um pedido")
        } else {
            let products = JSON.parse(localStorage.getItem("cart")).products;
           
            let getProdutosPromises = []
            for(let product of products){
                getProdutosPromises.push(axios.get("http://localhost:8081/produto/" + product.id))
            }

            Promise.all(getProdutosPromises).then((res) => {
                let pedidosPromises = []
                for(let [i, produto] of res.entries()){
                    let valorTotal = products[i].altura * products[i].largura * produto.data.preco;
                    console.log("cliente ", clientId)
                    const body = {
                        largura: products[i].largura,
                        altura: products[i].altura,
                        valorTotal: valorTotal,
                        clienteId: decodedToken.id,
                        produtoId: products[i].id
                    }

                    if(products[i].variacao != ""){
                        body.variacao = products[i].variacao
                    }

                    console.log(body)
                    let createPedidosPromises = []

                    pedidosPromises.push(axios.post("http://localhost:8081/pedido", body))
                }
                Promise.all(pedidosPromises).then((res) => {
                    // localStorage.removeItem("cart")
                    // window.location = "/painel/pedidos"
                })
            })

        }
    }

    return(
    <div className={`carrinho-container ${show ? "open" : ""}`}>
        <ToastContainer />
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
        <button className="carrinho-footer-action" onClick={checkoutHandle}>
            <ShoppingCartCheckoutIcon />
            <h4 className='label'>Fazer pedido</h4>
        </button>
    </div>)
}
