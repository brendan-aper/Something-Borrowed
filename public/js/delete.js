const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", async function () {
    const itemId = this.closest(".item-card").querySelector(
      'input[name="item-id"]'
    ).value;

    await fetch(`/api/item/${itemId}`, {
      method: "DELETE",
    });

    document.location.replace("/my-listings");
  });
});
