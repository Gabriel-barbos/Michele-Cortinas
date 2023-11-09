import React, { useState } from 'react';
import ThreeDots from './ThreeDots';
import ModalExcluir from './ModalExcluir';
import "../assets/css/dropdown.css"
export default function DropdownMenu(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
      <ThreeDots width="40px" height="100%"/>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Editar</li>
          <li><ModalExcluir type={props.type}/></li>
        </ul>
      )}
    </div>
  );
};
