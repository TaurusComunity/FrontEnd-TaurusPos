const finalizeOrderButton = document.getElementById('finalize-order-button');
const modalOverlay = document.getElementById('modal-overlay');
const cancelButton = document.getElementById('cancel-button');

// Show modal on button click
finalizeOrderButton.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
});

// Hide modal on cancel button click
cancelButton.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

// Optional: Close modal when clicking outside the content area
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});