const editButtons = document.querySelectorAll('.edit-buttons')

for(let i = 0; i < editButtons.length; i++) {
    const button = editButtons[i];

    button.addEventListener('click', (e) => {
        const reviewId = e.target.id.split('-')[2]
        const parkId = e.target.id.split('-')[3]
        const form = document.getElementById(`edit-container-${reviewId}`)

        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }

        const updateButton = document.getElementById(`submit-edit-${reviewId}`)
        updateButton.addEventListener('click', async(e) => {
            e.preventDefault();
            const rating = document.getElementById(`rating-${review.id}`).value
            const title = document.getElementById(`title-${review.id}`).value
            const body = document.getElementById(`description-${review.id}`).value

            const res = await fetch(`${parkId}/reviews/${reviewId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rating,
                    title,
                    body
                })
            })

            const data = await res.json()
            if (data.message === 'Success') {

            }
        })
    })
}
