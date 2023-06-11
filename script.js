const img = document.querySelector('img');
const button = document.querySelector('button');


function getGiphy() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0m9yqmprOR9tjDYccGrRF8ioYlVBmD0f&s=cats`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        });
};

getGiphy();

button.addEventListener('click', () => {
    getGiphy();
});

