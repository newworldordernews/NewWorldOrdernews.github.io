function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalContent = document.getElementById("modal-content");
    modal.style.display = "block";
    modalContent.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
