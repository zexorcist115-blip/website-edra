import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showGame, setShowGame] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update Jam Digital
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="container">
      {/* 1. Jam Digital ala Dashboard */}
      <div className="dashboard-clock">{time}</div>

      <div className="glass-card">
        <h1 className="title">エドラ</h1>
        {/* 5. Quote of the Day */}
        <p className="subtitle">"Nganggur bukan berarti berhenti, tapi lagi nunggu lampu hijau."</p>

        {!showGame ? (
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
              <button className="btn-social game" onClick={() => setShowGame(true)}>🎮 Dinosaurus Utama</button>
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

            {/* 3. Galeri Foto Mini */}
            <div className="mini-gallery">
              <p>Underground Vibes</p>
              <div className="gallery-grid">
                <div className="img-box" style={{backgroundImage: "url('/bg-nissan.jpg')"}}></div>
                <div className="img-box" style={{background: "#333"}}></div>
              </div>
            </div>
          </>
        ) : (
          <div className="game-screen">
            <button className="btn-back" onClick={() => setShowGame(false)}>⬅ Kembali ke Home</button>
            <iframe 
              src="https://offline-dino-game.firebaseapp.com/" 
              width="100%" 
              height="400" 
              style={{ borderRadius: '15px', border: 'none', backgroundColor: '#fff' }}
              title="Dino Game"
            ></iframe>
          </div>
        )}
      </div>

      {/* 2. Music Player (NFSU2 Vibes) */}
      <div className="music-player">
        <p>🎵 Riders on the Storm - Snoop Dogg</p>
        <audio controls autoPlay loop style={{height: '30px', width: '200px'}}>
          <source src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Snoop+Dogg+-+Riders+On+The+Storm&filename=mt/MTk5MTk1MzYxOTkxOTI4_fT5X0b_2f9UoU.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default App;
