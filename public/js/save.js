const saveBtn = document.querySelector('.save-btn');


const saveItem = async (event) => {
    event.preventDefault();
    saveBtn.textContent = 'Saved';

    let itemId = saveBtn.id;
    await fetch('/api/favorite', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({itemId})
    }) 

    console.log('done')

}

saveBtn.addEventListener('click', saveItem)