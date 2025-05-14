import * as Dialog from "@radix-ui/react-dialog";
import { Close, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal (){
  return(
    <Dialog.Portal>
      <Overlay />
      <Content >
        <Dialog.Title>Nova Transação</Dialog.Title>
          <Close>
            <X size={25}/>
          </Close>

          <form action="">
            <input type="text" placeholder="Descrição" required/>
            <input type="text" placeholder="Preço" required/>
            <input type="text" placeholder="Categoria" required/>

            <button type="submit">
              Cadastrar
            </button>
          </form>

        
      </Content >
    </Dialog.Portal>
  )
}