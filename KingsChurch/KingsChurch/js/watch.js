const watchButtons = document.querySelectorAll('.watch-btn');
const modal = document.getElementById('modalOverlay');
const videoFrame = document.getElementById('videoFrame');
const closeModal = document.getElementById('closeModal');

watchButtons.forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.sermon-card');
    const videoUrl = card.getAttribute('data-video');
    videoFrame.src = videoUrl + "?autoplay=1";
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  videoFrame.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    videoFrame.src = '';
  }
});
