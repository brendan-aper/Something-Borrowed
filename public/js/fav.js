const unsaveBtn = document.querySelectorAll('.unsaveBtn')

unsaveBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let postId = event.currentTarget.parentElement.id
        fetch(`/api/favorite/${postId}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((window.location.reload()))
    })
})

