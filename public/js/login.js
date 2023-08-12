const createBtn = document.querySelector('#createBtn');
const loginBtn = document.querySelector('#loginBtn')

// singup Btn 
createBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // TODO: redirect to logout page
    console.log('clicked')
    window.location.href = '/'
})

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;
    let location = document.querySelector('#login-location').value;
    let name = document.querySelector('#login-name').value;

    let userData = {
        first_name: name,
        email: email,
        password: password,
        location: location
    }

    console.log(userData);
    try {
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(fetch('/'))
        .catch((err) => {
            console.error(err); 
        });
    } catch (err) {
        console.error(err); 
    }



});
