// Music Control System
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');

  if (!bgMusic || !musicToggle) return;

  // Set initial volume
  bgMusic.volume = 0.25;

  // Handle music toggle
  musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (bgMusic.paused) {
      bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
      musicToggle.classList.add('playing');
      musicToggle.setAttribute('aria-label', 'Music is playing');
      localStorage.setItem('musicPlaying', 'true');
    } else {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
      musicToggle.setAttribute('aria-label', 'Music is paused');
      localStorage.setItem('musicPlaying', 'false');
    }
  });

  // Restore music state from localStorage
  const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
  if (wasPlaying) {
    bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    musicToggle.classList.add('playing');
  }

  // Update button text based on state
  const updateButtonState = () => {
    if (bgMusic.paused) {
      musicToggle.innerHTML = '🔇';
    } else {
      musicToggle.innerHTML = '🎵';
    }
  };

  bgMusic.addEventListener('play', updateButtonState);
  bgMusic.addEventListener('pause', updateButtonState);
  updateButtonState();
});
