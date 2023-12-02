import { Link, Button } from "@mui/material"
import JourneyHeader from "../../components/shop/JourneyHeader"


const Pedido = () => {

    const produtosInStorage = localStorage.getItem("cart")
    console.log(produtosInStorage)

    return(
        <div className="">
            <JourneyHeader />
            <main className="pedido-container">
                <Link href="/">
                    <Button
                        color="inherit"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        Continuar comprando
                    </Button>
                </Link>
                <h1>Pedido</h1>
                <div className="pedido-container-produtos">
                    <div className="pedido-container-produto">

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Pedido