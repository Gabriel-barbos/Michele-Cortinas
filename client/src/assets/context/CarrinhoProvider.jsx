import CarrinhoContext from "./CarrinhoContext"
import { useState } from "react"

function CarrinhoProvider({ children }) {
    const [name, setName] = useState("gabriel")
    
    const value = {
        name,
        setName
    }

    return (
        <CarrinhoContext.Provider value={ value }>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider