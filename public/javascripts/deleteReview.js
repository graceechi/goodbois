const deleteBtns = document.querySelectorAll('.delete-review-button')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];
    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const reviewId = e.target.id.split('-')[2]
        // const parkId = **************************************FIGURE THIS OUT*******************
        const res = await fetch(`/${parkId}/review/${reviewId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === 'Success') {
            const container = document.getElementById(`${review.id}-review-container`)
            container.remove()
        } else {

        }
    })
}
