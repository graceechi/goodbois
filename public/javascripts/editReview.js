const editButtons = document.querySelectorAll('.edit-buttons')

for(let i = 0; i < editButtons.length; i++) {
    const button = editButtons[i];

    button.addEventListener('click', (e) => {
        const reviewId = e.target.id.split('-')[2]
        const form = document.getElementById(`edit-container-${reviewId}`)

        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }

        const updateButton = document.getElementById(`submit-edit-${reviewId}`)
        updateButton.addEventListener('click', async(e) => {
            e.preventDefault();
        })
    })
}
