const deleteBtn = document.querySelector(".delete-btn");

const deleteItem = async function () {
  const itemId = document.querySelector('input[name="item-id"]').value;

  await fetch(`/api/item/${itemId}`, {
    method: "DELETE",
  });

  document.location.replace("/my-listings");
};

deleteBtn.addEventListener("click", deleteItem);
