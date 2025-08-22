import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Title() {
  const firstName = "Sourish".split("");
  const lastName = "Ghosh".split("");
  const [flickerStates, setFlickerStates] = useState({});

  // Load Neo Tech font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const totalLetters = firstName.length + lastName.length;
    
    const createFlickerEffect = () => {
      const newStates = {};
      
      // Random main flicker event every 2-4 seconds
      const mainFlickerInterval = setInterval(() => {
        const flickerType = Math.random();
        
        if (flickerType < 0.3) {
          // Type 1: Single letter flickers, others sympathetically blink
          const mainLetter = Math.floor(Math.random() * totalLetters);
          for (let i = 0; i < totalLetters; i++) {
            if (i === mainLetter) {
              // Main flicker - longer duration
              newStates[i] = { flicker: true, duration: 800 + Math.random() * 400 };
            } else if (Math.random() < 0.6) {
              // Sympathetic blink - very brief
              newStates[i] = { flicker: true, duration: 100 + Math.random() * 100 };
            }
          }
        } else if (flickerType < 0.6) {
          // Type 2: Random group flickers
          const groups = [
            [0, 1, 2, 3], // "Sour"
            [4, 5, 6], // "ish" 
            [8, 9, 10], // "Gho"
            [10, 11], // "os"
            [4, 5, 6, 7, 9, 10, 11], // random mix
          ];
          const selectedGroup = groups[Math.floor(Math.random() * groups.length)];
          
          selectedGroup.forEach(i => {
            newStates[i] = { 
              flicker: true, 
              duration: 600 + Math.random() * 500,
              intensity: Math.random() < 0.3 ? 'severe' : 'normal'
            };
          });
          
          // Some letters sympathetically blink
          for (let i = 0; i < totalLetters; i++) {
            if (!selectedGroup.includes(i) && Math.random() < 0.4) {
              newStates[i] = { flicker: true, duration: 80 + Math.random() * 120 };
            }
          }
        } else {
          // Type 3: Whole name flickers (like power surge)
          for (let i = 0; i < totalLetters; i++) {
            newStates[i] = { 
              flicker: true, 
              duration: 400 + Math.random() * 600,
              intensity: Math.random() < 0.4 ? 'severe' : 'normal'
            };
          }
        }
        
        setFlickerStates({...newStates});
        
        // Clear flicker states after their durations
        Object.keys(newStates).forEach(letterIndex => {
          setTimeout(() => {
            setFlickerStates(prev => {
              const updated = {...prev};
              delete updated[letterIndex];
              return updated;
            });
          }, newStates[letterIndex].duration);
        });
        
      }, 3000 + Math.random() * 4000);
      
      // Random micro-flickers every 500-1500ms
      const microFlickerInterval = setInterval(() => {
        if (Math.random() < 0.7) {
          const letterIndex = Math.floor(Math.random() * totalLetters);
          const microState = {
            [letterIndex]: { 
              flicker: true, 
              duration: 50 + Math.random() * 100,
              intensity: 'micro'
            }
          };
          
          setFlickerStates(prev => ({...prev, ...microState}));
          
          setTimeout(() => {
            setFlickerStates(prev => {
              const updated = {...prev};
              delete updated[letterIndex];
              return updated;
            });
          }, microState[letterIndex].duration);
        }
      }, 1000 + Math.random() * 2500);
      
      return () => {
        clearInterval(mainFlickerInterval);
        clearInterval(microFlickerInterval);
      };
    };
    
    const cleanup = createFlickerEffect();
    return cleanup;
  }, []);

  const getLetterStyle = (index) => {
    const state = flickerStates[index];
    const baseStyle = {
      textShadow: '0 0 3px #ffffff, 0 0 6px #ffffff, 0 0 10px #ffffff',
      color: '#ffffff',
      opacity: 1
    };
    
    if (!state?.flicker) {
      return baseStyle;
    }
    
    // Billboard glitch effect - complete on/off states
    const isOn = Math.random() > 0.6; // 40% chance to be completely off
    
    if (isOn) {
      return baseStyle; // Full brightness
    } else {
      return {
        textShadow: 'none',
        color: '#ffffff',
        opacity: 0, // Complete blackout
        transition: 'none' // Instant cut
      };
    }
  };

  return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <h1 className="flex text-6xl font-bold text-white relative" style={{ fontFamily: "'font-mono', sans-serif", fontWeight: 700 }}>
          {firstName.map((letter, i) => (
            <motion.span
              key={i}
              className="relative retro-glow"
              style={getLetterStyle(i)}
            >
              {letter}
            </motion.span>
          ))}
          <span className="w-4"></span>
          {lastName.map((letter, i) => {
            const globalIndex = i + firstName.length;
            return (
              <motion.span
                key={globalIndex}
                className="relative retro-glow"
                style={getLetterStyle(globalIndex)}
              >
                {letter}
              </motion.span>
            );
          })}
          <style jsx>{`
            .retro-glow:hover {
              text-shadow: 
                0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 15px #ffffff !important;
              opacity: 1 !important;
            }
          `}</style>
        </h1>
    <p className="mt-4 text-center text-lg text-neutral-300 font-mono" style={{ textShadow: '0 0 8px #fff, 0 0 16px #fff' }}>Welcome to the hub</p>
      </div>
  );
}