import { useState } from "react"
import '../assets/css/dropdownCarrinho.css'
export function DropdownCarrinho(){
   
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["CASA", "APARTAMENTO", "TRABALHO"];
  
    const handleSelect = (option) => {
      setSelectedOption(option);
    };

return(
<div className="dropdown">
    
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="" disabled selected>Casa</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

</div>
    )
}







