import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown } from 'lucide-react';

export default function DominoEffect() {
  const [stage, setStage] = useState('idle'); // 'idle', 'triggered', 'eureka'

  const handleTrigger = () => {
    if (stage !== 'idle') return;
    setStage('triggered');
    setTimeout(() => {
      setStage('eureka');
    }, 1200);
  };

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden border-y border-amber-500/10">
      
      {/* Background illumination changes in Eureka state */}
      <motion.div 
        className="absolute inset-0 bg-gold-accent/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'eureka' ? 1 : 0 }}
        transition={{ duration: 2 }}
      />

      <div className="section-container px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-bold uppercase tracking-widest mb-3 glow-amber-text">
            Simulação Interativa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            O Efeito Dominó
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg">
            A física do gasto preventivo: veja como uma intervenção minúscula na base impede o colapso do sistema no topo.
          </p>
        </div>

        {/* 3D Scene */}
        <div className="relative w-full max-w-3xl h-[450px] md:h-[550px] flex items-center justify-center perspective-[1200px] animate-fade-in-up delay-200">
          
          {/* Isometric Tabletop */}
          <motion.div 
            className="relative w-[240px] h-[400px]"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateX: 60, rotateZ: -45 }}
            animate={{ rotateX: 60, rotateZ: -45 }}
          >
             {/* Scene Floor */}
             <div className="absolute inset-0 border border-white/5 bg-white/[0.02] shadow-[0_0_50px_rgba(0,0,0,0.3)_inset] rounded-xl" />

             {/* Golden Domino (Catalyst) */}
             <motion.div
               onClick={handleTrigger}
               className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-20 origin-bottom flex flex-col items-center justify-end ${stage === 'idle' ? 'cursor-pointer' : ''}`}
               style={{ transformStyle: 'preserve-3d' }}
               initial={{ rotateX: -90, y: 0 }}
               animate={{ 
                 rotateX: -90, // stays anchored
                 scale: stage !== 'idle' ? 1.1 : 1,
               }}
               whileHover={stage === 'idle' ? { scale: 1.1 } : {}}
             >
               {/* Label */}
               <motion.div 
                 className="absolute -top-16 whitespace-nowrap bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-amber-500/30" 
                 style={{ transform: 'rotateX(90deg) rotateZ(45deg)'}}
               >
                 Kit Preventivo (R$ 30)
               </motion.div>

               <div className="w-full h-full bg-gradient-to-b from-amber-300 to-amber-600 rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.8)] border border-amber-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/20 animate-pulse" />
               </div>
               
               {/* Shockwave */}
               {stage !== 'idle' && (
                 <motion.div 
                   className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full border-[3px] border-amber-400"
                   initial={{ scale: 1, opacity: 1, rotateX: 90 }}
                   animate={{ scale: 80, opacity: 0 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                 />
               )}
             </motion.div>

             {/* Obsidian Dominos */}
             {[1, 2, 3].map((index) => {
               // Posicionados mais para trás (subindo no y do container)
               const bottomPos = 8 + (index * 80); 
               const isGiant = index === 3;
               const blockWidth = isGiant ? 64 : 32 + (index * 8);
               const blockHeight = isGiant ? 160 : 64 + (index * 16);

               return (
                 <motion.div
                   key={index}
                   className={`absolute left-1/2 -translate-x-1/2 origin-bottom`}
                   style={{ 
                     bottom: `${bottomPos}px`,
                     width: blockWidth, 
                     height: blockHeight,
                     transformStyle: 'preserve-3d'
                   }}
                   initial={{ rotateX: -90, y: 0 }}
                   animate={{
                     rotateX: stage === 'eureka' ? -105 : (stage === 'idle' && isGiant ? [-90, -93, -90] : -90),
                     y: stage === 'eureka' ? -15 : 0, // empurrado levemente pra trás
                   }}
                   transition={{
                     rotateX: stage === 'idle' ? { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } : { type: 'spring', stiffness: 300, damping: 15, delay: 0.1 * index },
                     y: { type: 'spring', stiffness: 300, damping: 15, delay: 0.1 * index }
                   }}
                 >
                   <div className={`w-full h-full bg-[#0a0a0a] rounded-sm border border-gray-800 ${isGiant ? 'shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'shadow-2xl'} relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                   </div>
                   
                   {isGiant && (
                     <motion.div 
                       className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap bg-burgundy-cta/20 text-red-400 text-sm font-bold px-4 py-2 rounded-full backdrop-blur-md border border-burgundy-cta/30 shadow-[0_0_20px_rgba(139,28,49,0.4)]" 
                       style={{ transform: 'rotateX(90deg) rotateZ(45deg)'}}
                     >
                       R$ 5.000+ / Colapso
                     </motion.div>
                   )}
                 </motion.div>
               );
             })}
          </motion.div>

          {/* Prompt Text */}
          <AnimatePresence>
            {stage === 'idle' && (
              <motion.div 
                className="absolute bottom-4 md:bottom-10 text-slate-400 text-sm font-bold animate-pulse flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-white/10"
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="w-2 h-2 rounded-full bg-gold-accent shadow-[0_0_10px_#D4AF37]" />
                Toque no dominó dourado para iniciar
              </motion.div>
            )}
          </AnimatePresence>

          {/* Eureka Modal */}
          <AnimatePresence>
            {stage === 'eureka' && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-20 px-6"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.3 }}
              >
                <div className="obsidian-card p-8 md:p-12 max-w-lg w-full text-center border-amber-500/30 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400" />
                  <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <TrendingDown size={32} className="text-gold-accent" />
                  </div>
                  <h3 className="text-3xl font-black text-amber-500 mb-4 glow-amber-text">O Efeito Quebrado</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                    Uma ação minúscula hoje paralisa um desastre gigante amanhã. A prevenção com itens básicos é <strong className="text-white text-xl">~166x mais eficiente</strong> para os cofres do Estado.
                  </p>
                  <button 
                    onClick={() => setStage('idle')}
                    className="btn-primary"
                  >
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
