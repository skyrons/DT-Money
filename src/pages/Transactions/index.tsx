import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchTransaction } from "./components/SearchTransaction";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
export function Transactions (){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTRansactions(){
    const response = await fetch ('http://localhost:3000/transactions');
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTRansactions();
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchTransaction />
        <TransactionsTable> 
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      
    </div>
  )
}