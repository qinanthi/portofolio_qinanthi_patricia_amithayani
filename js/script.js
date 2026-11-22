function bukaModal(gambarSrc, judul) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');

    modalImg.src = gambarSrc;
    modalTitle.textContent = judul;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function tutupModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}