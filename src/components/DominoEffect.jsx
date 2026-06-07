import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, RotateCcw, Heart } from 'lucide-react';

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
          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-3 py-1.5 rounded-sm backdrop-blur-md border ${isGiant ? 'bg-burgundy-cta/30 text-red-400 border-burgundy-cta/50 shadow-[0_0_20px_rgba(139,28,49,0.5)] -top-12' : 'bg-slate-800 text-slate-300 shadow-lg border-slate-700 -top-10'}`} 
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

  // Constant for automatic collapse loop
  useEffect(() => {
    let timer;
    if (stage === 'idle') {
      timer = setTimeout(() => {
        setStage('falling_collapse');
      }, 2000);
    } else if (stage === 'falling_collapse') {
      timer = setTimeout(() => {
        setStage('idle');
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const handleDonate = () => {
    setStage('falling_saved');
    setTimeout(() => {
      setStage('eureka');
    }, 2500); // Sequence completes after 2.5s
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

  // Generate 25 donation boxes for the rain effect
  const donationBoxes = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    xOffset: (Math.random() - 0.5) * 120, // Spread horizontally IN FRONT OF giant
    yOffset: 20 + (Math.random() * 60), // Y position in front of the giant block (which is at bottom: 40)
    delay: 1.2 + (Math.random() * 0.5), // Rain starts dropping later as giant falls
    dropHeight: 400 + (Math.random() * 300), // Height from which it drops
    finalZ: (i % 5) * 15, // Stack them up vertically
    rotateZ: Math.random() * 360
  }));

  // Block definitions (Arrayed from FARTHEST to CLOSEST)
  // Index 0: Farthest (Smallest)
  // Index 1: Medium
  // Index 2: Large
  // Index 3: Giant (Closest to Camera)
  const blocks = [
    { id: 0, bottom: 350, w: 30, h: 70, d: 12, label: "Falta de Kits", isGiant: false, fallAngle: -25, delay: 0 },
    { id: 1, bottom: 250, w: 45, h: 100, d: 16, label: "Doenças", isGiant: false, fallAngle: -25, delay: 0.3 },
    { id: 2, bottom: 140, w: 60, h: 150, d: 20, label: "Escoltas", isGiant: false, fallAngle: -25, delay: 0.6 },
    { id: 3, bottom: 20, w: 90, h: 220, d: 30, label: "R$ 5.000+ / Colapso", isGiant: true, fallAngle: 0 /* falls flat if collapse */, delay: 0.9 },
  ];

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
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg mb-8">
            Os problemas começam pequenos no fundo e crescem até colapsar o sistema na ponta. 
            Clique em "Fazer Doação" para intervir antes que seja tarde.
          </p>
          
          <button 
            onClick={handleDonate}
            className="btn-primary flex items-center gap-2 mx-auto scale-110"
          >
            <Heart size={20} />
            Fazer Doação
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
               <div className="w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             </div>

             {/* Rain of Donations (rendered in front of the giant domino to hold it) */}
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
                   z: stage === 'falling_saved' || stage === 'eureka' ? box.finalZ : box.dropHeight,
                   opacity: stage === 'falling_saved' || stage === 'eureka' ? [0, 1, 1] : 0,
                   rotateX: stage === 'falling_saved' || stage === 'eureka' ? box.rotateZ : 0,
                   rotateY: stage === 'falling_saved' || stage === 'eureka' ? box.rotateZ : 0
                 }}
                 transition={{
                   z: { type: 'spring', stiffness: 200, damping: 20, delay: stage === 'falling_saved' || stage === 'eureka' ? box.delay : 0 },
                   opacity: { duration: 0.2, delay: stage === 'falling_saved' || stage === 'eureka' ? box.delay : 0 },
                   rotateX: { type: 'spring', delay: stage === 'falling_saved' || stage === 'eureka' ? box.delay : 0 }
                 }}
               >
                 <Block3D w={15} h={15} d={15} colors={donationColors} isDonation={true} />
               </motion.div>
             ))}

             {/* Obsidian Dominos (The Chain Reaction falling FORWARDS) */}
             {blocks.map((block) => {
               // Determine target rotation based on state
               let targetRotateX = -90; // Standing up
               if (stage === 'falling_collapse' || stage === 'falling_saved' || stage === 'eureka') {
                 if (block.isGiant) {
                    if (stage === 'falling_saved' || stage === 'eureka') {
                       targetRotateX = -65; // Caught by the donations!
                    } else {
                       targetRotateX = 0; // Collapses flat on the ground!
                    }
                 } else {
                    targetRotateX = block.fallAngle; // Falls onto the next block
                 }
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
                     type: 'spring', 
                     stiffness: block.isGiant ? 80 : 150, 
                     damping: block.isGiant ? 12 : 15, 
                     delay: stage === 'idle' ? 0 : block.delay 
                   }}
                 >
                   {/* Realistic Cast Shadow */}
                   <motion.div 
                     className="absolute bottom-0 left-0 w-full bg-black/70 origin-bottom blur-lg" 
                     style={{ height: block.h * 1.5, transform: 'rotateX(90deg) translateZ(-2px)' }} 
                     animate={{ opacity: stage === 'idle' ? 0.6 : (targetRotateX === 0 ? 0 : 0.4) }}
                   />
                   
                   <Block3D w={block.w} h={block.h} d={block.d} colors={obsidianColors} isGiant={block.isGiant} label={block.label} />
                 </motion.div>
               );
             })}
          </motion.div>

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
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                    A doação direta formou um alicerce físico. Em vez do colapso massivo, o sistema é escorado pela solidariedade, anulando gastos exorbitantes em saúde prisional.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    <RotateCcw size={16} />
                    Resetar Simulação
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
