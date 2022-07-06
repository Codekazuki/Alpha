const addMovieModal = document.getElementById('add-modal');
const startaddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input')
const backdrop = document.getElementById('backdrop');
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');   
    toggleBackdrop(); 
};
const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    console.log(userInputs)
    const titleValue = userInputs[0].value ;
    const imageUrlValue = userInputs[1].value ;
    const ratingValue = userInputs[2].value ;
       
    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) { 
        alert('Please enter valid values(ratings between 1 and 5).');
        return;
    }
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

if(startaddMovieButton && backdrop &&  cancelAddMovieButton && confirmAddMovieButton ){
    startaddMovieButton.addEventListener('click', toggleMovieModal);
    backdrop.addEventListener('click', backdropClickHandler);
    cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler )
    confirmAddMovieButton.addEventListener('click', addMovieHandler)
}

// git init 
// git remote add origin .......... or git remote delete origin
// git add .
// git commit -m '<type a description of ur commit msg here>'
// git push origin <BRANCH_NAME>
