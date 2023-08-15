const favoriteBtn = document.querySelector('#favorites');

const findFavorites = () => {
    let savedArray = JSON.parse(localStorage.getItem('saved'))
    console.log(savedArray);

    fetch('/favorites', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(savedArray)
    })

}

favoriteBtn.addEventListener('click', findFavorites);

