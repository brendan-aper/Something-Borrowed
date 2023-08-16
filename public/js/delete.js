const deleteBtn = document.querySelector("#delete-btn");
const itemId = document.querySelector('input[name="item-id"]').value;

const deleteItem = async function () {
  await fetch(`/api/item/${itemId}`, {
    method: "DELETE",
  });

  document.location.replace("/my-listings");
};

deleteBtn.addEventListener("click", deleteItem);
