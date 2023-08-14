<<<<<<< HEAD
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("submit", async (event) => {
  event.preventDefault();

  let email = document.querySelector("#signup-email").value;
  let password = document.querySelector("#signup-password").value;
  let location = document.querySelector("#signup-location").value;
  let name = document.querySelector("#signup-name").value;

  let userData = {
    first_name: name,
    email: email,
    password: password,
    location: location,
  };

  try {
    // First, send the POST request to /api/user
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((window.location.href = "/"));
  } catch (err) {
    console.error(err);
  }
=======
const submitBtn = document.querySelector('#submitBtn')

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    let email = document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;
    let location = document.querySelector('#signup-location').value;
    let name = document.querySelector('#signup-name').value;

    let userData = {
        first_name: name,
        email: email,
        password: password,
        location: location
    }

    try {
        // First, send the POST request to /api/user
        await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(window.location.href = '/')
    } catch (err) {
        console.error(err);
    }
>>>>>>> main
});
