// const saveBtn = document.querySelector('.save-btn');


// const saveItem = async (event) => {
//     event.preventDefault();
//     saveBtn.textContent = 'Saved';

//     let itemId = saveBtn.id;
//     console.log(itemId)
//     await fetch('/api/favorite', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({itemId})
//     }) 

//     console.log('done')

// }

// saveBtn.addEventListener('click', saveItem)
// <------- CODE WORKS ------------------------------------------------------->
// const saveBtn = document.querySelector('.save-btn');

// const checkIfItemSavedOnServer = async (itemId) => {
//     const response = await fetch(`/api/favorite/${itemId}`, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });

//     const data = await response.json();
//     return data.isSaved; // Assuming your API returns whether the item is saved or not
// };

// const saveItemOnServer = async (itemId) => {
//     await fetch('/api/favorite', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ itemId })
//     });
// };

// const saveItem = async (event) => {
//     event.preventDefault();

//     const itemId = saveBtn.id;
//     console.log(itemId);

//     const isItemSaved = await checkIfItemSavedOnServer(itemId);
    
//     if (isItemSaved) {
//         console.log('Item is already saved');
//         return;
//     }

//     saveBtn.textContent = 'Saved';

//     await saveItemOnServer(itemId);

//     console.log('done');
// };

// saveBtn.addEventListener('click', saveItem);

//<-------------------------WORKS FOR NOW---------------------------------------------------------->

const saveBtn = document.querySelector('.save-btn');

const checkIfItemSavedOnServer = async (itemId) => {
    const response = await fetch(`/api/favorite/${itemId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();
    return data.isSaved;
};

const unsaveItemOnServer = async (itemId) => {
    await fetch(`/api/favorite/${itemId}`, {
        method: 'DELETE', // Use DELETE method to unsave
        headers: {
            'Content-type': 'application/json'
        }
    });
};

const saveItemOnServer = async (itemId) => {
    await fetch('/api/favorite', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ itemId })
    });
};

const saveItem = async (event) => {
    event.preventDefault();

    const itemId = saveBtn.id;
    console.log(itemId);

    const isItemSaved = await checkIfItemSavedOnServer(itemId);

    if (isItemSaved) {
        console.log('Item is already saved');
        unsaveItemOnServer(itemId);
        saveBtn.textContent = 'Save';
    } else {
        saveBtn.textContent = 'Saved';
        saveItemOnServer(itemId);
    }

    console.log('done');
};

saveBtn.addEventListener('click', saveItem);

