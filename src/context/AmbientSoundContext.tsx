"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";

interface AmbientSoundContextType {
  isPlaying: boolean;
  volume: number;
  toggleSound: () => void;
  setVolume: (volume: number) => void;
  isLoaded: boolean;
}

const AmbientSoundContext = createContext<AmbientSoundContextType>({
  isPlaying: false,
  volume: 0.3,
  toggleSound: () => {},
  setVolume: () => {},
  isLoaded: false,
});

// Ambient tavern sounds using Web Audio API with generated audio
// This creates a subtle ambient atmosphere without requiring external audio files
export function AmbientSoundProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const fireOscillatorsRef = useRef<OscillatorNode[]>([]);
  const isInitializedRef = useRef(false);

  // Create ambient noise (crackling fire simulation)
  const createAmbientNoise = useCallback(() => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const bufferSize = ctx.sampleRate * 4; // 4 seconds of noise
    const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    
    // Generate brownian noise (warmer, more natural)
    for (let channel = 0; channel < 2; channel++) {
      const data = noiseBuffer.getChannelData(channel);
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brownian noise formula with low-pass characteristic
        lastOut = (lastOut + 0.02 * white) / 1.02;
        data[i] = lastOut * 3.5; // Amplify
      }
    }
    
    return noiseBuffer;
  }, []);

  // Initialize audio context
  const initializeAudio = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();
      
      // Create master gain node
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.gain.value = volume;
      gainNodeRef.current.connect(audioContextRef.current.destination);
      
      isInitializedRef.current = true;
      setIsLoaded(true);
    } catch (error) {
      console.warn("Web Audio API not supported:", error);
    }
  }, [volume]);

  // Start ambient sounds
  const startAmbientSound = useCallback(() => {
    if (!audioContextRef.current || !gainNodeRef.current) return;
    
    const ctx = audioContextRef.current;
    
    // Resume context if suspended
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    
    // Create and play noise source (crackling fire ambience)
    const noiseBuffer = createAmbientNoise();
    if (noiseBuffer) {
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;
      
      // Create filter for warmer sound
      const lowpass = ctx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.value = 800;
      
      // Create subtle modulation for crackling effect
      const noiseGain = ctx.createGain();
      noiseGain.gain.value = 0.15;
      
      noiseSource.connect(lowpass);
      lowpass.connect(noiseGain);
      noiseGain.connect(gainNodeRef.current);
      noiseSource.start();
      
      noiseSourceRef.current = noiseSource;
    }
    
    // Create subtle low-frequency hum (tavern ambience)
    const createSubtleHum = (freq: number, gain: number) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.value = freq;
      oscGain.gain.value = gain;
      
      // Add subtle LFO modulation
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.1 + Math.random() * 0.2;
      lfoGain.gain.value = freq * 0.02;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();
      
      osc.connect(oscGain);
      oscGain.connect(gainNodeRef.current!);
      osc.start();
      
      fireOscillatorsRef.current.push(osc, lfo);
    };
    
    // Very subtle bass hum
    createSubtleHum(55, 0.03);
    createSubtleHum(82, 0.02);
    createSubtleHum(110, 0.015);
    
  }, [createAmbientNoise]);

  // Stop ambient sounds
  const stopAmbientSound = useCallback(() => {
    // Stop noise source
    if (noiseSourceRef.current) {
      try {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
      } catch {}
      noiseSourceRef.current = null;
    }
    
    // Stop oscillators
    fireOscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    fireOscillatorsRef.current = [];
  }, []);

  // Toggle sound
  const toggleSound = useCallback(async () => {
    if (!isInitializedRef.current) {
      await initializeAudio();
    }
    
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
    
    setIsPlaying(!isPlaying);
  }, [isPlaying, initializeAudio, startAmbientSound, stopAmbientSound]);

  // Set volume
  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = newVolume;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAmbientSound();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [stopAmbientSound]);

  return (
    <AmbientSoundContext.Provider
      value={{
        isPlaying,
        volume,
        toggleSound,
        setVolume,
        isLoaded,
      }}
    >
      {children}
    </AmbientSoundContext.Provider>
  );
}

export function useAmbientSound() {
  return useContext(AmbientSoundContext);
}
