import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react";
import ModalExcluir from "./ModalExcluir";
export default function RelatorioCard(props) {
    function createData(maisVendCategoria, ticketMedio, qtdPedidosRealizados, qtdPedidosIncompletos, qtdPedidosFinalizados) {
        return { maisVendCategoria, ticketMedio, qtdPedidosRealizados, qtdPedidosIncompletos, qtdPedidosFinalizados };
    }

    const [relatorios, setRelatorios] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8081/relatorio")
        .then(({data}) => {
            setRelatorios(data)
        })    
    }, [])
    return (
        
        
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{props.maisVendCategoria}</TableCell>
            <TableCell>{props.ticketMedio}</TableCell>
            <TableCell>{props.qtdPedidosRealizados}</TableCell>
            <TableCell>{props.qtdPedidosIncompletos}</TableCell>
            <TableCell>{props.qtdPedidosFinalizados}</TableCell>
        </TableRow>
      
        
    )
}