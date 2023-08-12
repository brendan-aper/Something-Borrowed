const loginBtn = document.getElementById("logout-btn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("/api/user/logout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(document.location.replace("/"))
    .catch((err) => {
      console.error(err);
    });
});
