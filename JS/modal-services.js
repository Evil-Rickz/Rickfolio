//Get Modal component
let brandModal = document.getElementById("brandingModal");
    flyModal = document.getElementById("flyersModal");
    motModal = document.getElementById("motionModal");
    
//Get the component that opens the modal
let btnModalBrand = document.getElementById("branding");
    btnModalFlyers = document.getElementById("flyers");
    btnModalMotion = document.getElementById("motion");

//When click in the button component to open modal, open it
btnModalBrand.onclick = function() {
    brandModal.style.display = "block";
}

btnModalFlyers.onclick = function() {
    flyModal.style.display = "block";
}

btnModalMotion.onclick = function() {
    motModal.style.display = "block";
}

//Get the element to close in modal
let modalClose = document.getElementsByClassName("modal-close")[0];
    servicesModal = document.getElementsByClassName("services_modal")[0];

//When click in the close button into modal, close it
modalClose.onClick = function() {
    servicesModal.style.display = "none";
}

//When click in anywhere outside of the modal, close it
window.onClick = function(event) {
    if (event.target == brandModal) {
        servicesModal.style.display = "none";
    }
}





//===================================================================






// /*------------------------------ SERVICES MODAL ------------------------------*/
// function openModal(modalID) {
//     const modal = document.getElementById(modalID);
//     if (modal) {
//         modal.classList.toggle('active-modal')
// /*        modal.addEventListener('click', (e) => {
//             if(e.target.id == modalID || e.target.className == 'modal-close') {
//                 modal.classList.remove('active-modal')
//             }
//         })*/
//     }
// };

// const branding = document.querySelector('.branding');
// branding.addEventListener('click', () => openModal('branding-modal'))

// const flyers = document.querySelector('.flyers');
// flyers.addEventListener('click', () => openModal('flyers-modal'))

// const motion = document.querySelector('.motion');
// motion.addEventListener('click', () => openModal('motion-modal'))