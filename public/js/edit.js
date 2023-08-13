const updateForm = document.getElementById("update-form");
const deleteBtn = document.getElementById("delete-btn");

const updateHandler = async function () {
  let title = document.querySelector("item-title").value;
  let description = document.querySelector("item-description").value;
  let location = document.querySelector("item-location").value;
  let category = document.querySelector("item-category").value;
  let image = document.querySelector("item-image").value;

  let itemData = {
    title: title,
    descpription: description,
    location: location,
    category: category,
    image: image,
  };

  console.log(itemData);

  await fetch(`/api/item/${item.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });

  document.location.replace("/dashboard");
};

const deleteHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

// Event listener on update-form
updateForm.addEventListener("submit", updateHandler);

// Event listener on delete item posting button
deleteBtn.addEventListener("click", deleteHandler);
