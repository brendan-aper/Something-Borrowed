const createBtn = document.getElementById("create-btn");

const createHeandler = async function (event) {
  event.preventDefault();

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

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify(itemData),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

// Event listener on create button
createBtn.addEventListener("click", createHeandler);
