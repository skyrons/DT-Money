import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
});

export function NewTransactionModal (){
  const { createTransaction } = useContext(TransactionsContext)

  type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

  const {
    register, 
    handleSubmit,
    control,
    formState: {isSubmitting},
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs){
    const { category, description, price, type } = data;

    await createTransaction({
      category,
      description,
      price,
      type
    })

    reset();
  }

  return(
    <Dialog.Portal>
      <Overlay />
      <Content >
        <Dialog.Title>Nova Transação</Dialog.Title>
          <Close>
            <X size={25}/>
          </Close>

          <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
            type="text" 
            placeholder="Descrição" 
            required
            {...register('description')}
            />
            <input 
            type="number" 
            placeholder="Preço" 
            required
            {...register('price', {valueAsNumber: true})}
            />
            <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register('category')}
            />

            <Controller 
              control={control}
              name="type"
              render={({field}) => {
                return(
                  <TransactionType 
                    onValueChange={field.onChange} 
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>

        
      </Content >
    </Dialog.Portal>
  )
}