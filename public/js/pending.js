const lendBtns = document.querySelectorAll(".lend-btn");
const availBtns = document.querySelectorAll(".avail-btn");

const markLending = async function () {
  const itemId = this.closest("article").querySelector(
    'input[name="item-id"]'
  ).value;

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
  const itemId = this.closest("article").querySelector(
    'input[name="item-id"]'
  ).value;

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
lendBtns.forEach((lendBtn) => {
  lendBtn.addEventListener("click", markLending);
});

// Mark listing as currently available
availBtns.forEach((availBtn) => {
  availBtn.addEventListener("click", markAvail);
});
