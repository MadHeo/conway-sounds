import React, { useState, useEffect } from "react";
import { useAudioContext } from "./AudioContextProvider";

const playSound = (audioContext, frequency, duration) => {
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, duration);
};

const SoundPlayer = () => {
  const audioContext = useAudioContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundInterval, setSoundInterval] = useState(null);

  useEffect(
    () => {
      if (isPlaying) {
        const playMultipleSounds = () => {
          const frequencies = Array.from({ length: 200 }, (_, i) => 440 + i);
          frequencies.forEach((frequency) =>
            playSound(audioContext, frequency, 1000)
          );
          setSoundInterval(setTimeout(playMultipleSounds, 1000));
        };
        playMultipleSounds();
      } else {
        clearTimeout(soundInterval);
      }
      return () => clearTimeout(soundInterval);
    },
    [isPlaying, audioContext, soundInterval]
  );

  return (
    <div>
      <button onClick={() => setIsPlaying(true)}>Start</button>
      <button onClick={() => setIsPlaying(false)}>Stop</button>
    </div>
  );
};

export default SoundPlayer;
