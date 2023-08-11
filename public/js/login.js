async function loginHandler(event) {
  event.preventDefault();
  const userEmail = document.getElementById("login-email").value();
  const userPass = document.getElementById("login-password").value();

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: userEmail,
      password: userPass,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Cannot log in. Please check your email and password and try again.");
  }
}

// Add event listener to login button
const loginForm = getElementById('login-form"');
loginForm.addEventListener('submit', loginHandler)
