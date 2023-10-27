import { useState } from 'react'
import Modal from "react-modal";
import '../assets/css/modal.css'



export function ModalTeste() {
const [modalIsOpen,setIsOpen] = useState(false);
Modal.setAppElement("#root");
function openModal() {
    setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}


  return (
<div className="container">
  <button onClick={openModal}>Cadastrar novo produto</button>
  <Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
contentLabel="Exemplo"
overlayClassName="modal-overlay"
className="modal-content"
>
  <h2>Cadastro de novo produto:</h2>
  <hr />  
  <form className="form">

    <div className="input-title">
    <label for ="nome">Titulo: </label>
    <input type="text" id="nome"></input> <br/>
    </div>

    <div className="input-cor">
    <label for ="tecido">Cores: </label>
    <input type="text" id="tecido"></input> <br/>
    </div>

    <div className="input-preco">
    <label for ="preco">Preço: </label>
    <input type="text" id="preco"></input> <br/>
    </div>

    <div className="input-desc">
    <label for ="desc">Descrição: </label><br/>
    <textarea id="descricao" name ="descrição" rows="4" cols="50"></textarea><br/>
    </div>

    <button className="cad-btn" type="submit">CADASTRAR</button>
  </form>


<button className="close-btn" onClick ={closeModal}>Fechar</button>
</Modal>
  </div>
  )
}
