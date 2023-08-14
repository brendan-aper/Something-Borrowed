const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("/api/user/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(console.log("User has logged out"))

    .catch((err) => {
      console.error(err);
    });
});
