/*------------------------------ SERVICES MODAL ------------------------------*/
function openModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.toggle('active-modal')
/*        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'modal-close') {
                modal.classList.remove('active-modal')
            }
        })*/
    }
};

const branding = document.querySelector('.branding');
branding.addEventListener('click', () => openModal('branding-modal'))

const flyers = document.querySelector('.flyers');
flyers.addEventListener('click', () => openModal('flyers-modal'))

const motion = document.querySelector('.motion');
motion.addEventListener('click', () => openModal('motion-modal'))