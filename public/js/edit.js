const itemId = document.querySelector('input[name="item-id"]').value;

const updateListingHandler = async (event) => {
  event.preventDefault();

  let title = document.querySelector(`input[name='item-title']`).value.trim();
  let description = document
    .querySelector(`textarea[name='item-desc']`)
    .value.trim();

  let itemData = {
    title,
    description,
  };
  console.log("TITLE:", title);
  console.log("DESC:", description);
  console.log("Item DATA", itemData);

  if (itemData) {
    const apiURL = `/api/item/${itemId}`;
    const response = await fetch(apiURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });

    if (response.ok) {
      document.location.replace("/my-listings");
    } else {
      alert("Failed to edit listing.");
    }
  }
};

const updatePostButton = document.querySelector("#update-post-btn");

if (updatePostButton) {
  updatePostButton.addEventListener("click", updateListingHandler);
}
