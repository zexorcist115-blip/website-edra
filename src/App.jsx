import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h1 className="title">エドラ</h1>
        <p className="subtitle">Hanya gabut & Nganggur :v</p>

        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ada rencana apa hari ini?"
          />
          <button onClick={addTodo} className="btn-add">+</button>
	<div className="game-container" style={{ marginTop: '20px' }}>
	  <iframe
	    src="https://offline-dino-game.firebaseapp.com/"
	    width="100%"
	    height="200"
	    style={{ borderRadius: '15px', border: 'none' }}
	    title="Dino Game"
	  ></iframe>
	</div>
	</div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">{todo}</li>
          ))}
        </ul>

        <div className="social-group">
          <a href="https://wa.me/6285756753691" target="_blank" rel="noreferrer">
            <button className="btn-social wa">WhatsApp</button>
          </a>
          <a href="https://instagram.com/draelain._._" target="_blank" rel="noreferrer">
            <button className="btn-social ig">Instagram</button>
          </a>
          <a href="https://saweria.co/Elainext" target="_blank" rel="noreferrer">
            <button className="btn-social saweria">Saweria</button>
          </a>
          <a href="https://lpkindonesianipponanugerah.co.id/" target="_blank" rel="noreferrer">
            <button className="btn-social lpk">LPK Guwa</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App
// update baru
