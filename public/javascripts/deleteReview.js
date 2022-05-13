const deleteBtns = document.querySelectorAll('.delete-review-button')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const popupId = e.target.id.split('-')[2];
        const popup = document.getElementById(`popup-${popupId}`)
        popup.classList.add('active')

        const yesBtns = document.querySelectorAll('.delete-yes')

        for (let i = 0; i < yesBtns.length; i++) {
            const yesBtn = yesBtns[i];

            yesBtn.addEventListener('click', async(e) => {
                e.preventDefault()
                console.log(e.target);
                const reviewId = e.target.id.split('-')[2]
                const parkId = e.target.id.split('-')[3]
                const res = await fetch(`/parks/${parkId}/review/${reviewId}`, {
                    method: 'DELETE'
                })

                const data = await res.json()
                if (data.message === 'Success') {
                    const container = document.getElementById(`${reviewId}-review-container`)
                    container.remove()
                }
            })
        }
    })
}

const cancel = document.getElementById('cancel')
cancel.addEventListener('click', async(e) => {
    e.preventDefault()
    const popup = cancel.closest('.popup')
    console.log(popup)
    popup.classList.remove('active')
})
