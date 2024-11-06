const modal = document.getElementById('terms-modal');
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-button');

openModal.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        modal.style.display = 'flex';
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});