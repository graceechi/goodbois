const editButtons = document.querySelectorAll('.edit-buttons')

for (let i = 0; i < editButtons.length; i++) {
    const button = editButtons[i];

    button.addEventListener('click', async(e) => {
        e.preventDefault()
        const reviewId = e.target.id.split('-')[2]
        const parkId = e.target.id.split('-')[3]
        const form = document.getElementById(`edit-container-${reviewId}`)

        form.classList.add('active')

        const updateButton = document.getElementById(`submit-edit-${reviewId}-${parkId}`)

        updateButton.addEventListener('click', async(e) => {
            e.preventDefault();

            const rating = document.getElementById(`rating-${reviewId}`).value
            const title = document.getElementById(`title-${reviewId}`).value
            const body = document.getElementById(`description-${reviewId}`).value

            const res = await fetch(`/parks/${parkId}/review/${reviewId}`, {
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
                const ratingEle = document.getElementById(`rating-${reviewId}-display`)
                const titleEle = document.getElementById(`title-${reviewId}-display`)
                const descriptionEle = document.getElementById(`description-${reviewId}-display`)
                ratingEle.innerHTML = data.review.rating
                titleEle.innerHTML = data.review.title
                descriptionEle.innerHTML = data.review.body
                form.classList.remove('active')
            }
        })
    })
}

const cancel = document.getElementById('cancel-btn')

cancel.addEventListener('click', async(e) => {
    e.preventDefault()
    const form = cancel.closest('.edit-container')
    form.classList.remove('active')
})
