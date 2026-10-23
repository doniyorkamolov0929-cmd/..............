/**
 * Synthesizes romantic chime / harp chords using Web Audio API
 */
export function playRomanticChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    // Pentatonic romantic notes: C5, E5, G5, B5, C6
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.12);

      gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.12);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + index * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.12 + 1.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.12);
      osc.stop(ctx.currentTime + index * 0.12 + 1.8);
    });
  } catch (e) {
    console.warn('Web Audio playback failed or blocked:', e);
  }
}
