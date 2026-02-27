import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showGame, setShowGame] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update Jam Digital Dashboard
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      {/* Jam Digital ala Dashboard Mobil */}
      <div className="dashboard-clock">{time}</div>

      <div className="glass-card">
        <h1 className="title">エドラ</h1>
        <p className="subtitle">"Nganggur bukan berarti berhenti, tapi lagi nunggu lampu hijau."</p>

        {!showGame ? (
          <div className="social-group">
            {/* Tombol Utama */}
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
            <iframe 
              src="https://offline-dino-game.firebaseapp.com/" 
              width="100%" 
              height="450" 
              style={{ borderRadius: '15px', border: 'none', backgroundColor: '#fff' }}
              title="Dino Game"
            ></iframe>
          </div>
        )}
      </div>

      {/* Music Player NFSU2 (Riders on the Storm) */}
      <div className="music-player">
        <p>🎵 NFSU2 - Riders on the Storm</p>
        <iframe 
          width="100%" 
          height="20" 
          scrolling="no" 
          frameborder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175730302&color=%23ff4757&inverse=true&auto_play=true&show_user=false"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
