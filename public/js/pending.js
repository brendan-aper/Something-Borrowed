const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

const confirmBorrow = async function () {
  // let itemData = {
  //   isAvailable: false,
  // };

  await fetch(`/api/item/${item.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      isAvailable: false,
    }),
  });
};

const cancelBorrow = async function () {
  // Change item.borrower_id to null
  let itemData = {
    borrower_id: null,
    isAvailable: true,
  };

  await fetch(`/api/item/${item.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });
};

// Add event listener to confirm lendee
confirmBtn.addEventListener("click", confirmBorrow);

// Add event listener to cancel borrow request
confirmBtn.addEventListener("click", cancelBorrow);
