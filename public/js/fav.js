const unsaveBtn = document.querySelector(".unsaveBtn");

unsaveBtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("unsaveBtn")) {
    const postId = event.target.closest(".item-card").id;

    fetch(`/api/favorite/${postId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  }
});
