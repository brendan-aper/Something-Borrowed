const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  const location = document.querySelector('#signup-location').value.trim();
  const first_name = document.querySelector('#signup-name').value.trim();


  if (email && password && location && first_name) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, location, first_name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.')
    }
  } 
};

const submitBtn = document.querySelector('#signup-form');
if (submitBtn) {
  submitBtn.addEventListener('submit', signupFormHandler);
}
