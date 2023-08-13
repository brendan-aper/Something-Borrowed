const updateForm = document.getElementById('update-form');
const deleteBtn = document.getElementById('delete-btn');

updateForm.addEventListener("click", (event) => {
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
    image: image
  };

  console.log(itemData);

  fetch(`/api/item/${item.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });

  document.location.replace('/dashboard');
})