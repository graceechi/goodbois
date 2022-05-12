const deleteBtns = document.querySelectorAll('.delete-review-button')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const reviewId = e.target.id.split('-')[2]
        const parkId = e.target.id.split('-')[3]
        console.log(`${reviewId} ----- reviewId`)
        console.log(`${parkId} ----- parkId`)
        const res = await fetch(`/${parkId}/review/${reviewId}`, {
            method: 'DELETE'
        })

        if (res) {
            const container = document.getElementById(`${reviewId}-review-container`)
            container.remove()
        }
    })
}
