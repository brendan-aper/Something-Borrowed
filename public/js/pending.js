const itemId = document.querySelector('input[name="item-id"]').value;

const lendBtn = document.querySelector("lend-btn");
const availBtn = document.querySelector("avail-btn");

const markLending = async function () {
  let availability = {
    isAvailable: false,
  };

  await fetch(`/api/item/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(availability),
  });

  console.log("item marked as unavailable");

  window.location.reload();
};

const markAvail = async function () {
  let availability = {
    isAvailable: true,
  };

  await fetch(`/api/item/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(availability),
  });

  console.log("item marked as available");

  window.location.reload();
};

// Mark listing as currently unavailable
lendBtn.addEventListener("click", markLending);

// Mark listing as currently available
availBtn.addEventListener("click", markAvail);
