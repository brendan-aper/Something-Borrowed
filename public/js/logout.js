async function logoutHandler() {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
}

// Add event listener to logout button
const loginForm = getElementById('login-form"');
loginForm.addEventListener("submit", loginHandler);
