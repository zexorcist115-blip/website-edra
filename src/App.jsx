import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState(88);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // 1. Jam Tanpa Detik
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.getHours().toString().padStart(2, '0') + ":" + 
              now.getMinutes().toString().padStart(2, '0'));
    }, 1000);

    // 2. Efek Glitch 10 Detik Sekali
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 10000);

    return () => { clearInterval(timer); clearInterval(glitchInterval); };
  }, []);

  return (
    <div className="container overflow-hidden relative">
      <div className="red-fog"></div>

      {/* 2. Pojok Kiri Atas: Baterai & Signal */}
      <div className="status-bar">
        <div className="flex-row">
          <div className="battery-icon"><div className="battery-level"></div></div>
          <span>BAT: {battery}%</span>
        </div>
        <div className="signal-text">SIGNAL: MAX</div>
      </div>

      {/* 1. Main Clock Gothic Glitch */}
      <div className={`main-clock ${isGlitching ? 'glitch' : ''}`}>
        {time || "00:00"}
      </div>

      <div className="glass-card">
        <h1 className="title-neon">エドラ</h1>
        <p className="subtitle">"Nganggur bukan berarti berhenti..."</p>

        <div className="social-group">
          <a href="https://wa.me/6285756753691" target="_blank" className="cyber-btn border-green">
            <span className="icon">📟</span> <span>RADIO CALL</span>
          </a>
          <a href="https://instagram.com/draelain._._" target="_blank" className="cyber-btn border-pink">
            <span className="icon">📸</span> <span>FEED</span>
          </a>
          <a href="https://saweria.co/Elainext" target="_blank" className="cyber-btn border-orange">
            <span className="icon">💰</span> <span>TERMINAL_PAY</span>
          </a>
          <a href="https://lpkindonesianipponanugerah.co.id/" target="_blank" className="cyber-btn border-blue">
            <span className="icon">🖥️</span> <span>S1D3 PR0J3CT</span>
          </a>
        </div>
      </div>

      {/* 6. Pojok Kanan Bawah: Security & Visualizer */}
      <div className="security-info">
        <div className="visualizer">
          <div className="v-bar v1"></div><div className="v-bar v2"></div><div className="v-bar v3"></div>
        </div>
        <p className="ip-text">SESSION IP: 182.XX.XX.XX (ENCRYPTED)</p>
        <p className="song-text">RIDERS ON THE STORM</p>
      </div>

      <audio autoPlay loop src="/musik.mp3" />
    </div>
  );
}

export default App;
