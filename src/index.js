const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        const input = document.querySelector('input#searchByID');
  
}

document.addEventListener('DOMContentLoaded', init);
