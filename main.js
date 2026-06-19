// Subtle download feedback animation
document.addEventListener('DOMContentLoaded', () => {
  const btnDownload = document.getElementById('btn-download-cv');

  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const originalText = btnDownload.innerHTML;

      // Brief visual feedback
      btnDownload.style.pointerEvents = 'none';
      btnDownload.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Téléchargement…
      `;

      setTimeout(() => {
        btnDownload.innerHTML = originalText;
        btnDownload.style.pointerEvents = '';
      }, 2500);
    });
  }
});
