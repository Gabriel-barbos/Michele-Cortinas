import styled from "styled-components"
import { ProdutoCard } from "../../components/ProdutoCard";

export default function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/pedido/")
        .then(({ data }) => {
            setPedidos(data)
        })
    }, [])

    return (
        <>
        <header>
            <h1>Pedidos</h1>
        </header>
        <div className="items-list">
        {pedidos.map((v) => <ProdutoCard id={v.id} titulo={v.titulo} img={v.img} />)}
        {pedidos.length == 0 && <p>Nenhuma pedido feito.</p>}
        </div>
        </>
       
        
    )
}

const ItemsList = styled.div `

`
