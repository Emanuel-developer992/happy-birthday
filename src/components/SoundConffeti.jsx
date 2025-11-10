import Confetti from "../sounds/confetti-pop.mp3"
export default function SoundConfetti() {
    const audio = new Audio(Confetti); // Caminho do seu arquivo de áudio
    audio.volume = 0.3; // 👈 volume entre 0.0 (mudo) e 1.0 (máximo)
    audio.play();
};