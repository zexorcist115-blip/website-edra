import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState(88);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // 1. Logika Jam & Efek Glitch
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.getHours().toString().padStart(2, '0') + ":" + 
              now.getMinutes().toString().padStart(2, '0'));
    }, 1000);

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 10000);

    // Ambil status baterai asli jika didukung browser
    if (navigator.getBattery) {
      navigator.getBattery().then(bat => setBattery(Math.round(bat.level * 100)));
    }

    return () => { clearInterval(timer); clearInterval(glitchInterval); };
  }, []);

  // 2. Fungsi Sakti Pancingan Audio
  const startAudio = () => {
    if (!hasInteracted) {
      const audio = document.getElementById("bg-audio");
      audio.play().then(() => {
        setHasInteracted(true);
        console.log("Audio Playing!");
      }).catch(err => console.log("Gagal: ", err));
    }
  };

  return (
    <div className="container" onClick={startAudio} onTouchStart={startAudio} onWheel={startAudio}>
      {/* Efek Kabut Merah Bawah */}
      <div className="red-fog"></div>

      {/* Pojok Kiri Atas: Baterai & Signal */}
      <div className="status-bar">
        <div className="flex-row">
          <div className="battery-icon">
            <div className="battery-level" style={{ width: `${battery}%` }}></div>
          </div>
          <span>BAT: {battery}%</span>
        </div>
        <div className="signal-text">SIGNAL: MAX</div>
      </div>

      {/* Jam Digital Gothic Glitch */}
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

      {/* Pojok Kanan Bawah: Security & Visualizer */}
      <div className="security-info">
        <div className="visualizer">
          <div className="v-bar v1"></div><div className="v-bar v2"></div><div className="v-bar v3"></div>
        </div>
        <p className="ip-text">SESSION IP: 182.XX.XX.XX (ENCRYPTED)</p>
        <p className="song-text">RIDERS ON THE STORM</p>
      </div>

      {/* Audio Element Tanpa Controls (Sembunyi) */}
      <audio id="bg-audio" loop>
        <source src="/musik.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
