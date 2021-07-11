const getStartedBtn = document.querySelector('.getstarted');
const modal = document.querySelector('.signup-modal');
const closebtn = document.querySelector('.btn-close');

// eventlistener
getStartedBtn.addEventListener('click', displayModal)

closebtn.addEventListener('click', closeModal)



function displayModal(e) {
    modal.style.display = 'block'
    
    e.preventDefault()
}

function closeModal (e) {
    modal.style.display = 'none'

    e.preventDefault()
}
