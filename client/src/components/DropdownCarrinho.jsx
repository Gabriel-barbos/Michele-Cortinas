import { useState } from "react"
export function DropdownCarrinho(){
    const [isActive, setIsActive] = useState(false);
    return(
        <div className="dropdown">
        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>Casa
        <span className="fas fa-caret-down"></span>
        </div>
       {isActive &&(
         <div className="dropdown-list">
         <div className="endereco-item">
             Casa 1
         </div>
         <div className="endereco-item">
             Trabalho
         </div>
     </div>
       )}
        </div>
    )
}







