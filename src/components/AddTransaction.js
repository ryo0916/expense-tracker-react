import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>支出を追加</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            テキスト
          </label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="テキストを入力してください..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">金額<br/>
          (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="金額を入力してください..." />
        </div>
        <button className="btn">支出を追加</button>
      </form>
    </>
  )
}