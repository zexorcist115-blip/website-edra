import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState(88);
  const [isGlitching, setIsGlitching] = useState(false);
  const audioRef = useRef(null);

  // 1. Jam Digital Gothic & Glitch (Tanpa Detik)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.getHours().toString().padStart(2, '0') + ":" + 
              now.getMinutes().toString().padStart(2, '0'));
    }, 1000);

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 10000);

    return () => { clearInterval(timer); clearInterval(glitchInterval); };
  }, []);

  // 2. Info Baterai (Real if possible, else Fake)
  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then(bat => setBattery(Math.round(bat.level * 100)));
    }
  }, []);

  const playMusic = () => { audioRef.current?.play().catch(() => {}); };

  return (
    <div className="container overflow-hidden relative" onMouseMove={playMusic} onClick={playMusic}>
      {/* 4. Efek Kabut Merah (Background Overlay) */}
      <div className="red-fog"></div>

      {/* 2. Top Left: Status Bar */}
      <div className="status-bar">
        <div className="flex items-center gap-2">
          <div className="battery-icon">
            <div className="battery-level" style={{ width: `${battery}%` }}></div>
          </div>
          <span>BAT: {battery}%</span>
        </div>
        <div className="text-red-900/50">SIGNAL: MAX</div>
      </div>

      {/* 1. Main Clock (Gothic/LCD Style) */}
      <motion.div 
        className={`main-clock ${isGlitching ? 'glitch-text' : ''}`}
        animate={isGlitching ? { x: [-2, 2, -2], opacity: [1, 0.8, 1] } : {}}
      >
        {time}
      </motion.div>

      <div className="glass-card z-10">
        <h1 className="title-neon">エドラ</h1>
        <p className="subtitle italic opacity-60">"Nganggur bukan berarti berhenti..."</p>

        <div className="social-group mt-6">
          <LinkBtn icon="📟" label="S1D3 PR0J3CT" href="https://lpkindonesianipponanugerah.co.id/" color="blue" />
          <LinkBtn icon="📞" label="RADIO CALL" href="https://wa.me/6285756753691" color="green" />
          <LinkBtn icon="📸" label="FEED" href="https://instagram.com/draelain._._" color="pink" />
          <LinkBtn icon="💰" label="TERMINAL_PAY" href="https://saweria.co/Elainext" color="orange" isTerminal={true} />
        </div>
      </div>

      {/* 6. Bottom Right: Security Info & Visualizer */}
      <div className="security-info text-right">
        <div className="flex items-end gap-3">
          <div className="visualizer">
            {[...Array(5)].map((_, i) => <motion.div key={i} animate={{ height: [5, 15, 5] }} transition={{ repeat: Infinity, duration: 0.5, delay: i*0.1 }} className="v-bar" />)}
          </div>
          <p className="text-[10px] text-red-900/40">SESSION IP: 182.XX.XX.XX (ENCRYPTED)</p>
        </div>
        <p className="text-[10px] tracking-widest text-red-500">RIDERS ON THE STORM</p>
      </div>

      <audio ref={audioRef} loop src="/musik.mp3" />
    </div>
  );
}

// Sub-komponen Tombol dengan Framer Motion
function LinkBtn({ icon, label, href, color, isTerminal }) {
  const handleClick = (e) => {
    if (isTerminal) {
      e.preventDefault();
      alert("EXECUTING_TERMINAL_PAYMENT... ACCESS GRANTED");
      setTimeout(() => window.open(href, '_blank'), 1500);
    }
  };

  return (
    <motion.a 
      href={href} target="_blank" onClick={handleClick}
      whileHover={{ scale: 1.02, skewX: -5 }}
      className={`cyber-btn border-${color}-900/30 hover:border-red-500`}
    >
      <span className="text-xs mr-3">{icon}</span>
      <span className="font-mono text-sm tracking-tighter">{label}</span>
    </motion.a>
  );
}

export default App;
