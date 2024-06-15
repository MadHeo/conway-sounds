import React, { createContext, useContext, useMemo } from "react";

// AudioContext 컨텍스트 생성
const AudioContextContext = createContext(null);

export const AudioContextProvider = ({ children }) => {
  const audioContext = useMemo(
    () => new (window.AudioContext || window.webkitAudioContext)(),
    []
  );

  return (
    <AudioContextContext.Provider value={audioContext}>
      {children}
    </AudioContextContext.Provider>
  );
};

export const useAudioContext = () => {
  return useContext(AudioContextContext);
};
