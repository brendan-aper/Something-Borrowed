async function loginHandler(event) {
  event.preventDefault();
  const userEmail = document.getElementById("login-email").value();
  const userPass = document.getElementById("login-password").value();

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
    
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(window.location.href = '/')
        .catch((err) => {
            console.error(err); 
        });
};