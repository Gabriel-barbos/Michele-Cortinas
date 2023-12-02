import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react";
import ModalExcluir from "../../components/admin/ModalExcluir";
import GerarRelatorio from "../../components/admin/GerarRelatorio";
import RelatorioCard from "../../components/admin/RelatorioCard";

export default function Relatorios() {
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
        <>
        <h1>Relatórios</h1>
        <GerarRelatorio></GerarRelatorio>
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
                    <RelatorioCard
                    maisVendCategoria={relatorio.maisVendCategoria}
                    ticketMedio={relatorio.ticketMedio}
                    qtdPedidosRealizados={relatorio.qtdPedidosRealizados}
                    qtdPedidosIncompletos={relatorio.qtdPedidosIncompletos}
                    qtdPedidosFinalizados={relatorio.qtdPedidosFinalizados}
                    ></RelatorioCard>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}