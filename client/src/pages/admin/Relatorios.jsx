import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react";

export default function Relatorios() {
    function createData(maisVendCategoria, ticketMedio, qtdPedidosRealizados, qtdPedidosIncompletos, qtdPedidosFinalizados) {
        return { maisVendCategoria, ticketMedio, qtdPedidosRealizados, qtdPedidosIncompletos, qtdPedidosFinalizados };
    }

    const [relatorios, setRelatorios] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8081/cliente")
        .then(({data}) => {
            setClientes(data)
        })    
    }, [])

   
    return (
        <>
        
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Categoria mais vendida</TableCell>
                    <TableCell>Ticket Médio</TableCell>
                    <TableCell>Quantidade de pedidos realizados</TableCell>
                    <TableCell>Pedidos Incompletos</TableCell>
                    <TableCell>Pedidos Finalizados</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {relatorios.map((relatorio) => (
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{relatorio.maisVendCategoria}</TableCell>
                        <TableCell>{cliente.ticketMedio}</TableCell>
                        <TableCell>{cliente.qtdPedidosRealizados}</TableCell>
                        <TableCell>{cliente.qtdPedidosIncompletos}</TableCell>
                        <TableCell>{cliente.qtdPedidosFinalizados}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}