import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import '../assets/css/produtoUnico.css';
import cortinaCinza from '../assets/img-teste/cortina-cinza.jpg';

export function ProdutoUnico(){
  return (
    <>
      <img className="imgprod" alt="Imagem do Produto" src={cortinaCinza} />

      <header className="header" />
      <footer className="footer" />


      <h1 className="nomeprod" >Nome do Produto</h1>
      <p className="descricao">
        cortina blackout com regulagem de abertura e tecido fresco que náo deixa
        cheiro, com facil lavagem e remoção
      </p>

{/* 
      <div className="altura">Altura (em metros)</div>
      <div className="largura">Largura (em metros)</div>
      */}
      
      <a href="https://www.youtube.com/watch?v=8fItc6KUuh8&pp=ygUfY29tbyBtZWRpciBvIHRhbWFuaG8gZGEgY29ydGluYQ%3D%3D" className="NsabeMedirLink">Não sabe medir? Clique aqui</a>
      <button className="carrinho">
        <div className="btnCarrinho" />
        <div className="adicionarAoCarrinho">Adicionar ao carrinho</div>
      </button>


      <div className="customizacoes">
        <p className="customizacoes1">{`Customizações `}</p>
      </div>
      <div className="precoprod">R$ 500,00</div>
      <TextField
        className="inputLargura"
        color="primary"
        label="Insira a largura"
        placeholder="Exemplo: 1,87 "
        sx={{ width: 370 }}
        variant="filled"
      />
      <TextField
        className="inputAltura"
        color="primary"
        label="Insira a altura"
        placeholder="Exemplo: 1,75"
        sx={{ width: 370 }}
        variant="filled"
      />
      <div className="precoTotal">Preço total</div>
      <img
        className="prodImgMini4Icon"
        alt=""
        src={cortinaCinza}
      />
      <img
        className="prodImgMini3Icon"
        alt=""
        src={cortinaCinza}
      />
      <img
        className="prodImgMini2Icon"
        alt=""
        src={cortinaCinza}

      />
      <img
        className="prodImgMini1Icon"
        alt=""
        src={cortinaCinza}

      />

<div className="custom-container">
  <button className="circle">
  <img  src={cortinaCinza}/>
  </button>

  <button className="circle">
  <img  src={cortinaCinza}/>
  </button>

  <button className="circle">
  <img  src={cortinaCinza}/>
  </button>

  <button className="circle">
  <img  src={cortinaCinza}/>
  </button>
</div>



{/*
      <div className="custom1">
        <button> a}/>
        </button>
      </div>
      
      <div className="custom2">
        <button></button>
      </div>

      <div className="custom3">
        <button></button>
      </div>

      <div className="custom4">
        <button></button>
      </div>
*/}
      </>
  );
};

