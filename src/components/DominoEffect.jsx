import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, RotateCcw } from 'lucide-react';

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
      <div className={`absolute w-full h-full ${colors.front} border ${colors.border} flex items-center justify-center`} style={{ transform: `translateZ(${d/2}px)` }}>
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
          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-sm backdrop-blur-md border ${isGiant ? 'bg-burgundy-cta/30 text-red-400 border-burgundy-cta/50 shadow-[0_0_20px_rgba(139,28,49,0.5)] -top-12' : 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.6)] border-amber-400 -top-10 cursor-pointer hover:bg-amber-400'}`} 
          style={{ transform: `translateZ(${d/2 + 10}px)` }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default function DominoEffect() {
  const [stage, setStage] = useState('idle'); // 'idle', 'falling', 'eureka'

  const handleTrigger = () => {
    if (stage !== 'idle') return;
    setStage('falling');
    setTimeout(() => {
      setStage('eureka');
    }, 2500); // Sequence completes after 2.5s
  };

  const handleReset = () => {
    setStage('idle');
  };

  // Color Profiles
  const goldColors = {
    front: 'bg-gradient-to-b from-amber-300 to-amber-600 shadow-[0_0_30px_rgba(212,175,55,0.6)_inset]',
    back: 'bg-amber-700',
    side: 'bg-amber-500',
    top: 'bg-amber-200',
    border: 'border-amber-300/50'
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

  // Generate 20 donation boxes for the rain effect
  const donationBoxes = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    xOffset: (Math.random() - 0.5) * 120, // Spread horizontally behind giant
    yOffset: 340 + (Math.random() * 60), // Y position behind the giant block
    delay: 1.0 + (Math.random() * 0.6), // Rain starts dropping at 1.0s
    dropHeight: 400 + (Math.random() * 300), // Height from which it drops
    finalZ: (i % 5) * 15, // Stack them up vertically
    rotateZ: Math.random() * 360
  }));

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden border-y border-amber-500/10">
      
      {/* Background ambient light */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.02) 0%, rgba(15,23,42,1) 70%)' }}
        animate={{ background: stage === 'eureka' ? 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(15,23,42,1) 70%)' : 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.02) 0%, rgba(15,23,42,1) 70%)' }}
        transition={{ duration: 2 }}
      />

      <div className="section-container px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-bold uppercase tracking-widest mb-3 glow-amber-text">
            Física da Prevenção
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            O Efeito Dominó
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg">
            Veja como uma intervenção minúscula impede a queda do sistema. Clique no botão de doação para iniciar a reação em cadeia.
          </p>
        </div>

        {/* Top Action Bar */}
        <div className="flex justify-center w-full mb-8 z-30 relative animate-fade-in-up delay-100">
          <button 
            onClick={handleReset}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 font-bold text-sm ${stage === 'idle' ? 'bg-slate-900 border-slate-800 text-slate-500 opacity-50 cursor-not-allowed' : 'bg-slate-800 border-amber-500/30 text-amber-500 hover:bg-slate-700 hover:text-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]'}`}
            disabled={stage === 'idle'}
          >
            <RotateCcw size={16} />
            Resetar Simulação
          </button>
        </div>

        {/* 3D Scene */}
        <div className="relative w-full max-w-4xl h-[450px] md:h-[600px] flex items-center justify-center perspective-[1500px] animate-fade-in-up delay-200">
          
          {/* Isometric Tabletop Container */}
          <motion.div 
            className="relative w-[300px] h-[500px]"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateX: 65, rotateZ: -45 }}
            animate={{ rotateX: 65, rotateZ: -45 }}
          >
             {/* Glowing Scene Floor */}
             <div className="absolute inset-0 border border-white/5 bg-slate-900/40 rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)_inset]" style={{ transform: 'translateZ(-1px)' }}>
               {/* Grid Lines for realism */}
               <div className="w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             </div>

             {/* Rain of Donations (rendered behind the giant domino) */}
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
                   z: stage !== 'idle' ? box.finalZ : box.dropHeight,
                   opacity: stage !== 'idle' ? [0, 1, 1] : 0,
                   rotateX: stage !== 'idle' ? box.rotateZ : 0,
                   rotateY: stage !== 'idle' ? box.rotateZ : 0
                 }}
                 transition={{
                   z: { type: 'spring', stiffness: 200, damping: 20, delay: stage !== 'idle' ? box.delay : 0 },
                   opacity: { duration: 0.2, delay: stage !== 'idle' ? box.delay : 0 },
                   rotateX: { type: 'spring', delay: stage !== 'idle' ? box.delay : 0 }
                 }}
               >
                 <Block3D w={15} h={15} d={15} colors={donationColors} isDonation={true} />
               </motion.div>
             ))}

             {/* Golden Domino (Catalyst) */}
             <motion.div
               onClick={handleTrigger}
               className={`absolute left-1/2 -translate-x-1/2 origin-bottom ${stage === 'idle' ? 'cursor-pointer hover:drop-shadow-[0_0_20px_rgba(212,175,55,1)]' : ''}`}
               style={{ 
                 bottom: 10,
                 width: 30, 
                 height: 70,
                 transformStyle: 'preserve-3d' 
               }}
               initial={{ rotateX: -90 }}
               animate={{ 
                 // Falls backward towards the next block (from -90 to -145)
                 rotateX: stage !== 'idle' ? -145 : -90, 
               }}
               transition={{ type: 'spring', stiffness: 200, damping: 15, delay: stage !== 'idle' ? 0 : 0 }}
               whileHover={stage === 'idle' ? { scale: 1.05 } : {}}
             >
               {/* Cast Shadow */}
               <motion.div 
                 className="absolute bottom-0 left-0 w-full bg-black/50 origin-bottom blur-md" 
                 style={{ height: 100, transform: 'rotateX(90deg) translateZ(-1px)' }} 
                 animate={{ opacity: stage !== 'idle' ? 0.2 : 0.5 }}
               />
               
               <Block3D w={30} h={70} d={12} colors={goldColors} label="Fazer Doação" />
             </motion.div>

             {/* Obsidian Dominos (The Chain Reaction) */}
             {[1, 2, 3].map((index) => {
               // Distribute them along the Y axis (bottom to top)
               const bottomPos = 10 + (index * 105); 
               const isGiant = index === 3;
               
               const blockW = isGiant ? 90 : 40 + (index * 10);
               const blockH = isGiant ? 220 : 90 + (index * 20);
               const blockD = isGiant ? 30 : 16 + (index * 4);

               // Delays for the cascading fall
               const fallDelay = index * 0.25;

               return (
                 <motion.div
                   key={index}
                   className={`absolute left-1/2 -translate-x-1/2 origin-bottom`}
                   style={{ 
                     bottom: `${bottomPos}px`,
                     width: blockW, 
                     height: blockH,
                     transformStyle: 'preserve-3d'
                   }}
                   initial={{ rotateX: -90 }}
                   animate={{
                     // If it's the giant block, it only tilts slightly and is stopped by the donations
                     // If it's a normal block, it falls completely onto the next one
                     rotateX: stage !== 'idle' 
                       ? (isGiant ? -110 : -145) 
                       : (isGiant ? [-90, -91.5, -90] : -90),
                   }}
                   transition={{
                     rotateX: stage === 'idle' 
                       ? { repeat: Infinity, duration: 2, ease: 'easeInOut' } 
                       : (isGiant ? { type: 'spring', stiffness: 100, damping: 10, delay: fallDelay } : { type: 'spring', stiffness: 200, damping: 15, delay: fallDelay }),
                   }}
                 >
                   {/* Realistic Cast Shadow */}
                   <motion.div 
                     className="absolute bottom-0 left-0 w-full bg-black/70 origin-bottom blur-lg" 
                     style={{ height: blockH * 1.5, transform: 'rotateX(90deg) translateZ(-2px)' }} 
                     animate={{ opacity: stage !== 'idle' ? (isGiant ? 0.6 : 0.2) : 0.8 }}
                   />
                   
                   <Block3D w={blockW} h={blockH} d={blockD} colors={obsidianColors} isGiant={isGiant} label={isGiant ? "R$ 5.000+ / Colapso" : null} />
                 </motion.div>
               );
             })}
          </motion.div>

          {/* Prompt Text Overlay */}
          <AnimatePresence>
            {stage === 'idle' && (
              <motion.div 
                className="absolute bottom-8 text-slate-400 text-sm font-bold flex items-center gap-2 bg-slate-900/80 px-6 py-3 rounded-full border border-white/10 shadow-2xl backdrop-blur-md"
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold-accent shadow-[0_0_10px_#D4AF37] animate-pulse" />
                Clique em "Fazer Doação" para iniciar
              </motion.div>
            )}
          </AnimatePresence>

          {/* Eureka Modal */}
          <AnimatePresence>
            {stage === 'eureka' && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-40 px-6 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
              >
                <div className="obsidian-card p-8 md:p-12 max-w-lg w-full text-center border-amber-500/30 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)] pointer-events-auto mt-20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400" />
                  <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <TrendingDown size={32} className="text-gold-accent" />
                  </div>
                  <h3 className="text-3xl font-black text-amber-500 mb-4 glow-amber-text">Efeito Paralisado</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-0 font-medium">
                    A doação direta de materiais formou um alicerce. Em vez do colapso massivo, o sistema é escorado pela solidariedade base, anulando gastos exorbitantes em saúde prisional.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
