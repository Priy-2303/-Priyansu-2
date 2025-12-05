document.querySelectorAll('.index-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all
    document.querySelectorAll('.index-btn').forEach(b => b.classList.remove('active'));
    
    // Add active to clicked
    btn.classList.add('active');
    
    // Get piece ID from data attribute
    const pieceId = btn.getAttribute('data-piece');
    console.log('Clicking button for piece:', pieceId); // Debug log
    
    // Find and scroll to piece
    const piece = document.getElementById(pieceId);
    console.log('Found piece:', piece); // Debug log
    
    if (piece) {
      // Add small delay for smooth animation
      setTimeout(() => {
        piece.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      console.error('Piece not found with ID:', pieceId);
    }
  });
});
