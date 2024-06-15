class SoundPlayer {
  constructor() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
  }

  palySound(frequency, duration) {
    const oscillator = this.audioContext.createOscillator();
    const now = this.audioContext.currentTime;

    // 주파수 설정
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now);

    // GainNode 생성 (볼륨 조절)
    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(1, now);

    // 연결
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // 소리 재생
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, duration);
  }
}

export default SoundPlayer;
