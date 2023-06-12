const img = document.querySelector('img');
const button = document.querySelector('button');
const search = document.querySelector('input');


async function getGiphy() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0m9yqmprOR9tjDYccGrRF8ioYlVBmD0f&s=cats`, {mode: 'cors'})
    const catData = await response.json();    
    img.src = catData.data.images.original.url;
};

getGiphy();

button.addEventListener('click', () => {
    img.src = '';
    getGiphy();
});


search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        img.src = '';
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0m9yqmprOR9tjDYccGrRF8ioYlVBmD0f&s=${search.value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            img.src = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
        });
    }
})