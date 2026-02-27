import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showGame, setShowGame] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="dashboard-clock">{time}</div>

      <div className="glass-card">
        <h1 className="title">エドラ</h1>
        <p className="subtitle">"Nganggur bukan berarti berhenti, tapi lagi nunggu lampu hijau."</p>

        {!showGame ? (
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
        ) : (
          <div className="game-screen">
            <button className="btn-back" onClick={() => setShowGame(false)}>⬅ Kembali ke Home</button>
            <iframe src="https://offline-dino-game.firebaseapp.com/" width="100%" height="450" style={{ borderRadius: '15px', border: 'none', backgroundColor: '#fff' }} title="Dino Game"></iframe>
          </div>
        )}
      </div>

      <div className="music-player">
        <p>🎵 Riders on the Storm</p>
        <audio controls loop style={{height: '35px', width: '240px'}}>
          <source src="/musik.mp3" type="audio/mpeg" />
          Browser lo gak support audio.
        </audio>
      </div>
    </div>
  );
}

export default App;
