const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#msg-1');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = search.value
    messageOne.textContent = 'Loading...'
    fetch(`http://localhost:8000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.forecast
            }
        });
    });
});