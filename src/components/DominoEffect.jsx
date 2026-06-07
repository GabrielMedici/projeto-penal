import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, RotateCcw, Heart, Play, AlertTriangle } from 'lucide-react';

const Block3D = ({ w, h, d, colors, isGiant, label, isDonation }) => {
  return (
    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
      {/* Back */}
      <div className={`absolute w-full h-full ${colors.back} border ${colors.border}`} style={{ transform: `translateZ(${-d/2}px) rotateY(180deg)` }} />
      {/* Right */}
      <div className={`absolute h-full ${colors.side} border ${colors.border}`} style={{ width: d, right: 0, transform: `translateX(50%) rotateY(90deg)` }} />
      {/* Left */}
      <div className={`absolute h-full ${colors.side} border ${colors.border}`} style={{ width: d, left: 0, transform: `translateX(-50%) rotateY(-90deg)` }} />
      {/* Top */}
      <div className={`absolute w-full ${colors.top} border ${colors.border}`} style={{ height: d, top: 0, transform: `translateY(-50%) rotateX(90deg)` }} />
      {/* Front */}
      <div className={`absolute w-full h-full ${colors.front} border ${colors.border} flex flex-col items-center justify-center`} style={{ transform: `translateZ(${d/2}px)` }}>
        {isGiant && (
          <div className="absolute top-4 w-[80%] h-1 bg-red-900/40 rounded-full" />
        )}
        {isDonation && (
          <div className="w-2 h-2 bg-amber-200/50 rounded-sm" />
        )}
      </div>

      {/* Floating Label specific to 3D orientation */}
      {label && (
        <div 
          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-sm backdrop-blur-md border transition-opacity duration-300 ${isGiant ? 'bg-burgundy-cta/30 text-red-400 border-burgundy-cta/50 shadow-[0_0_20px_rgba(139,28,49,0.5)] -top-12' : 'bg-slate-800 text-slate-300 shadow-lg border-slate-700 -top-10'}`} 
          style={{ transform: `translateZ(${d/2 + 10}px)` }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default function DominoEffect() {
  // 'idle', 'cascade', 'frozen', 'collapse', 'saved', 'eureka'
  const [stage, setStage] = useState('idle'); 

  // Cinematic Gameplay Loop
  useEffect(() => {
    let timer;
    if (stage === 'idle') {
      timer = setTimeout(() => setStage('cascade'), 1000);
    } else if (stage === 'cascade') {
      // Third domino (Infecções) starts falling at 400ms.
      // We change to 'frozen' stage to trigger the button UI and the 3-second countdown early.
      timer = setTimeout(() => setStage('frozen'), 400); 
    } else if (stage === 'frozen') {
      // User has 3 seconds to click Donate while the rest of the cascade is still falling!
      timer = setTimeout(() => setStage('collapse'), 3000);
    } else if (stage === 'collapse' || stage === 'eureka') {
      // Reset the scene 6 seconds after the outcome
      timer = setTimeout(() => setStage('idle'), 6000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const handleDonate = () => {
    setStage('saved');
    setTimeout(() => {
      setStage('eureka');
    }, 4500); // Give user more time to admire the boxes holding the domino
  };

  const handleReset = () => {
    setStage('idle');
  };

  const obsidianColors = {
    front: 'bg-gradient-to-br from-[#222] to-[#050505] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]',
    back: 'bg-[#0a0a0a]',
    side: 'bg-[#111]',
    top: 'bg-[#2a2a2a]',
    border: 'border-gray-700/30'
  };

  const donationColors = {
    front: 'bg-amber-500',
    back: 'bg-amber-700',
    side: 'bg-amber-600',
    top: 'bg-amber-400',
    border: 'border-amber-300/30'
  };

  // Block definitions carefully measured to fall FORWARDS (towards the background)
  // Wider stagger (0.2s) with gravity tween for a fluid, continuous wave
  const blocks = [
    { id: 0, bottom: 20, w: 25, h: 50, d: 8, label: "Sem Kits", isGiant: false, delay: 0, cascadeAngle: -15, savedAngle: -20, collapseAngle: 0 },
    { id: 1, bottom: 55, w: 32, h: 70, d: 10, label: "Sarna/Piolho", isGiant: false, delay: 0.2, cascadeAngle: -25, savedAngle: -30, collapseAngle: -2 },
    { id: 2, bottom: 105, w: 42, h: 95, d: 14, label: "Infecções", isGiant: false, delay: 0.4, cascadeAngle: -35, savedAngle: -40, collapseAngle: -4 },
    { id: 3, bottom: 170, w: 55, h: 130, d: 18, label: "Processos", isGiant: false, delay: 0.6, cascadeAngle: -45, savedAngle: -50, collapseAngle: -6 },
    { id: 4, bottom: 250, w: 70, h: 170, d: 24, label: "Hospitais", isGiant: false, delay: 0.8, cascadeAngle: -55, savedAngle: -60, collapseAngle: -8 },
    { id: 5, bottom: 360, w: 90, h: 220, d: 30, label: "R$ 5.000+ / Colapso", isGiant: true, delay: 1.0, cascadeAngle: -65, savedAngle: -70, collapseAngle: -10 },
  ];

  // Generate 100 donation boxes for a massive, professional rain effect
  const donationBoxes = Array.from({ length: 100 }).map((_, i) => {
    const yRand = Math.random();
    // Position safely BEHIND the leaning giant block (whose top reaches ~452)
    // Shifted further back to 470 so they don't fall "on top" of the domino
    const yPos = 470 + yRand * 80; 
    const maxZ = (1 - yRand) * 150 + 20; 
    
    return {
      id: i,
      xOffset: (Math.random() - 0.5) * 160, // Wide spread horizontally
      yOffset: yPos, 
      delay: (Math.random() * 0.6), // Fast, chaotic drop
      dropHeight: 800 + (Math.random() * 400), 
      finalZ: Math.random() * maxZ, // Stack them up to form a wedge pile
      rotZ: Math.random() * 360,
      rotX: (Math.random() - 0.5) * 120, // Full 3D tumbling
      rotY: (Math.random() - 0.5) * 120,
    };
  });

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden border-y border-amber-500/10 min-h-[900px] flex flex-col justify-center">
      
      {/* Background ambient light */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.02) 0%, rgba(15,23,42,1) 70%)' }}
        animate={{ background: stage === 'eureka' ? 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(15,23,42,1) 70%)' : (stage === 'collapse' ? 'radial-gradient(circle at 50% 50%, rgba(139,28,49,0.05) 0%, rgba(15,23,42,1) 70%)' : 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.02) 0%, rgba(15,23,42,1) 70%)') }}
        transition={{ duration: 2 }}
      />

      <div className="section-container px-6 relative z-10 flex flex-col items-center flex-1 w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-4 animate-fade-in-up w-full max-w-2xl">
          <span className="inline-block text-gold-accent text-sm font-bold uppercase tracking-widest mb-3 glow-amber-text">
            Cinemática da Prevenção
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            O Efeito Dominó
          </h2>
          <p className="text-slate-400 font-medium text-lg mb-0">
            A falta de pequenos itens na base causa um colapso em cadeia. Assista à simulação e intervenha antes da catástrofe.
          </p>
        </div>

        {/* 3D Scene AND Sidebar Layout */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 flex-1">
          
          {/* Action Center - Left on Desktop, Top on Mobile */}
          <div className="flex flex-col items-center justify-center min-h-[120px] w-full max-w-sm z-30">
            <AnimatePresence mode="wait">
              {stage === 'frozen' ? (
                <motion.div 
                  key="donate-btn"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-2 text-red-500 font-bold mb-4 animate-pulse uppercase tracking-widest text-sm drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                    <AlertTriangle size={18} />
                    Risco de Colapso Crítico!
                  </div>
                  <button 
                    onClick={handleDonate}
                    className="btn-cta flex items-center gap-2 scale-110 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.8)]"
                  >
                    <Heart size={20} className="animate-bounce" />
                    Fazer Doação Urgente
                  </button>
                  <div className="mt-4 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500"
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 3, ease: "linear" }} // 3 seconds to click
                    />
                  </div>
                </motion.div>
              ) : stage === 'collapse' ? (
                <motion.div 
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">O Sistema Caiu</p>
                  <p className="text-slate-400 text-center text-sm">O gasto será milionário porque a prevenção não aconteceu.</p>
                </motion.div>
              ) : stage === 'idle' || stage === 'cascade' ? (
                <motion.div 
                  key="observing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2"
                >
                  <Play size={16} className="animate-pulse text-amber-500" />
                  Observando Cadeia...
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Isometric Tabletop Wrapper for Mobile Scaling */}
          <div className="w-full flex justify-center items-center h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden lg:overflow-visible">
            <div className="scale-[0.6] sm:scale-[0.75] md:scale-90 lg:scale-100 origin-center transition-transform duration-500">
              <motion.div 
                className="relative w-[300px] h-[650px] shrink-0"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateX: 65, rotateZ: -45 }}
                animate={{ rotateX: 65, rotateZ: -45 }}
              >
             {/* Glowing Scene Floor */}
             <div className="absolute inset-0 border border-white/5 bg-slate-900/40 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)_inset]" style={{ transform: 'translateZ(-1px)' }}>
               <div className="w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             </div>

             {/* Rain of Donations (rendered BEHIND the giant domino to prop it up) */}
             {donationBoxes.map((box) => (
               <motion.div
                 key={`donation-${box.id}`}
                 className="absolute origin-center"
                 style={{
                   width: 15,
                   height: 15,
                   bottom: box.yOffset,
                   left: `calc(50% + ${box.xOffset}px)`,
                   transformStyle: 'preserve-3d'
                 }}
                 initial={{ z: box.dropHeight, opacity: 0, rotateX: 0, rotateY: 0 }}
                 animate={{
                   z: stage === 'saved' || stage === 'eureka' ? box.finalZ : box.dropHeight,
                   opacity: stage === 'saved' || stage === 'eureka' ? [0, 1, 1] : 0,
                   rotateX: stage === 'saved' || stage === 'eureka' ? box.rotX : 0,
                   rotateY: stage === 'saved' || stage === 'eureka' ? box.rotY : 0,
                   rotateZ: stage === 'saved' || stage === 'eureka' ? box.rotZ : 0
                 }}
                 transition={{
                   z: { type: 'spring', stiffness: 200, damping: 20, delay: stage === 'saved' || stage === 'eureka' ? box.delay : 0 },
                   opacity: { duration: 0.2, delay: stage === 'saved' || stage === 'eureka' ? box.delay : 0 },
                   rotateX: { type: 'spring', delay: stage === 'saved' || stage === 'eureka' ? box.delay : 0 },
                   rotateY: { type: 'spring', delay: stage === 'saved' || stage === 'eureka' ? box.delay : 0 },
                   rotateZ: { type: 'spring', delay: stage === 'saved' || stage === 'eureka' ? box.delay : 0 }
                 }}
               >
                 <Block3D w={16} h={16} d={16} colors={donationColors} isDonation={true} />
               </motion.div>
             ))}

             {/* Obsidian Dominos */}
             {blocks.map((block) => {
               // Determine target rotation based on cinematic state
               let targetRotateX = -90; // Standing up
               if (stage === 'cascade' || stage === 'frozen') {
                 targetRotateX = block.cascadeAngle; 
               } else if (stage === 'saved' || stage === 'eureka') {
                 targetRotateX = block.savedAngle;
               } else if (stage === 'collapse') {
                 targetRotateX = block.collapseAngle;
               }

               return (
                 <motion.div
                   key={block.id}
                   className={`absolute left-1/2 -translate-x-1/2 origin-bottom`}
                   style={{ 
                     bottom: `${block.bottom}px`,
                     width: block.w, 
                     height: block.h,
                     transformStyle: 'preserve-3d'
                   }}
                   initial={{ rotateX: -90 }}
                   animate={{
                     rotateX: targetRotateX,
                   }}
                   transition={{
                     type: 'tween', 
                     ease: 'easeIn',
                     duration: block.isGiant ? 0.6 : 0.35, 
                     // Keep delays active even when the timer UI appears (frozen stage)
                     delay: (stage === 'cascade' || stage === 'frozen' || stage === 'collapse') ? block.delay : 0 
                   }}
                 >
                   {/* Realistic Cast Shadow */}
                   <motion.div 
                     className="absolute bottom-0 left-0 w-full bg-black/70 origin-bottom blur-lg transition-opacity duration-500" 
                     style={{ height: block.h * 1.5, transform: 'rotateX(90deg) translateZ(-2px)' }} 
                     animate={{ opacity: stage === 'idle' ? 0.6 : (targetRotateX === 0 ? 0.1 : 0.4) }}
                   />
                   
                   <Block3D w={block.w} h={block.h} d={block.d} colors={obsidianColors} isGiant={block.isGiant} label={block.label} />
                 </motion.div>
               );
             })}
          </motion.div>
            </div>
          </div>

        </div>

        {/* Eureka Modal */}
        <AnimatePresence>
          {stage === 'eureka' && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-40 px-6 pointer-events-none bg-slate-950/60 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
            >
              <div className="obsidian-card p-8 md:p-12 max-w-lg w-full text-center border-amber-500/30 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)] pointer-events-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400" />
                <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <TrendingDown size={32} className="text-gold-accent" />
                </div>
                <h3 className="text-3xl font-black text-amber-500 mb-4 glow-amber-text">Colapso Evitado</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                  Sua doação criou um muro de contenção físico. Em vez do desastre financeiro e humano, o sistema foi escorado pela solidariedade civil na hora exata.
                </p>
                <button 
                  onClick={handleReset}
                  className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <RotateCcw size={16} />
                  Resetar Cena
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
