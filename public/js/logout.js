const logoutBtn = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.')
  }
};

const logoutBtnHandler = document.querySelector('#logout-btn');
if (logoutBtnHandler) {
  logoutBtnHandler.addEventListener('click', logoutBtn);
}