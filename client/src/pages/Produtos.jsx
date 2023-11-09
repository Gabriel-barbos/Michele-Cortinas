import { ProdutoCard } from "../components/ProdutoCard"
import AdicionarProdutoModal from "../components/AdicionarProdutoModal"
const produtosMock = [{
    t: "Cortina1",
    i: "imagem1"
},
{
    t: "Cortinas2",
    i: "imagem2"
}
]
export function Produtos() {
    return (
        <>
            <header className="list-header">
                <h1>Produtos</h1>
                <AdicionarProdutoModal/>
            </header>
        <div className="items-list-produtos">
        {produtosMock.map((v) => <ProdutoCard title={v.t} img={v.i} />)}
        </div>
        </>

    )
}