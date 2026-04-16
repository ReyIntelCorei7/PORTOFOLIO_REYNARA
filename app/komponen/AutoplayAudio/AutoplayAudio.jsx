// components/AutoplayAudio.jsx
'use client';

import { useRef, useEffect, useState } from 'react';

export default function AutoplayAudio({ src }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    
    const playAudio = async () => {
      try {
        if (audio) {
          audio.muted = true; 
          await audio.play();
        }
      } catch (error) {
        console.log('Autoplay failed:', error);
      }
    };

    playAudio();

    const unmuteOnInteraction = () => {
      setIsMuted(false);
      document.removeEventListener('click', unmuteOnInteraction);
    };

    document.addEventListener('click', unmuteOnInteraction);

    return () => {
      document.removeEventListener('click', unmuteOnInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      autoPlay
      muted={isMuted}
      loop 
    >
      <source src={src} type="audio/mpeg" />
      Browser Anda tidak mendukung elemen audio.
    </audio>
  );
} 