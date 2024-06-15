let audioContext = null;

function createAudioContext() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    throw new Error("not supported in this browser");
  }

  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

createAudioContext();

export function playSounds(frequency, duration, osType) {
  // OscillatorNode 생성 (기본 파형: sine)
  const oscillator = audioContext.createOscillator();
  oscillator.type = osType; // 파형의 타입: sine, square, sawtooth, triangle, custom
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // 주파수 설정

  // GainNode 생성 (볼륨 조절)
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.01, audioContext.currentTime); // 초기 볼륨 설정

  // 연결
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // 소리 재생 시작
  oscillator.start();

  // 소리 재생 중지
  setTimeout(() => {
    oscillator.stop();
  }, duration);
}
