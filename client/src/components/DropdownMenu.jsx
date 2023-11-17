import React, { useState } from 'react';
import ThreeDots from './ThreeDots';
import ModalExcluir from './ModalExcluir';
import ModalEditar from './ModalEditarCategoria';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../assets/css/dropdown.css"
export default function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleMenu} className="dropdown-toggle">
          <ThreeDots width="40px" height="100%" />
        </button>
        {isOpen && (
          <Paper sx={{ width: 150, maxWidth: '100%', position: 'absolute', right: '20px'}}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText>
                  <ModalEditar id={props.id} name={props.name}/>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText>
                  <ModalExcluir entity={props.entity} id={props.id} name={props.name}/>
                </ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          // <ul className="dropdown-menu">
          //   <li><ModalEditar id={props.id} name={props.name}/></li>
          //   <li><ModalExcluir route={props.route} id={props.id} name={props.name}/></li>
          // </ul>
        )}
      </div>
    </>

  );
};