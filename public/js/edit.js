const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const updateListingHandler = async (event) => {
  event.preventDefault();
 

  let title = document.querySelector(`input[name='item-title']`).value.trim();
  let description = document.querySelector(`textarea[name='item-desc']`).value.trim();
  // let location = document.querySelector("item-location").value.trim();
  // let category = document.querySelector("item-category").value.trim();
  // let image = document.querySelector("item-image").value.trim();

  let itemData = {
    title,
    description
    
  };
  console.log("TITLE:", title)
  console.log("DESC:", description)
  console.log("Item DATA", itemData)

  if (itemData) {
    const apiURL = `/api/item/${post_id}`;
    const response = await fetch(apiURL, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
    });

    if (response.ok) {
      document.location.replace("/my-listings");
    } else {
      alert("Failed to edit listing.")
    }
  }
};

const updatePostButton = document.querySelector("#update-post-btn");

if (updatePostButton) {
  updatePostButton.addEventListener("click", updateListingHandler);
}
