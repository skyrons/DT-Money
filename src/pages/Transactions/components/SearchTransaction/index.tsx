import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";


export function SearchTransaction (){
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação"/>

      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  )
}