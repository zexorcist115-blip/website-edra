import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showGame, setShowGame] = useState(false); // Buat kontrol game

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

        {!showGame ? (
          /* --- TAMPILAN HOME (WA, IG, LPK, SAWERIA) --- */
          <>
            <div className="input-group">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ada rencana apa hari ini?" 
              />
              <button onClick={addTodo} className="btn-add">+</button>
            </div>

            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item">{todo}</li>
              ))}
            </ul>

            <div className="social-group">
              <button className="btn-social game" onClick={() => setShowGame(true)}>🎮 Main Dino</button>
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
          </>
        ) : (
          /* --- TAMPILAN GAME DINO (KHUSUS) --- */
          <div className="game-screen">
            <button className="btn-back" onClick={() => setShowGame(false)}>⬅ Kembali ke Home</button>
            <iframe 
              src="https://offline-dino-game.firebaseapp.com/" 
              width="100%" 
              height="500" 
              style={{ borderRadius: '15px', border: 'none' }}
              title="Dino Game"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
