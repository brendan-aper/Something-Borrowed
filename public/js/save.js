const saveBtn = document.querySelector('.save-btn');

let savedArray = [];

const saveItem = async (event) => {
    event.preventDefault();
    saveBtn.textContent = 'Saved';

    let itemId = saveBtn.id;
    savedArray.push(itemId)

    localStorage.setItem('saved', JSON.stringify(savedArray))

}

saveBtn.addEventListener('click', saveItem)