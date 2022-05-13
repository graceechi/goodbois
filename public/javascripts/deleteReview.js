const deleteBtns = document.querySelectorAll('.delete-review-button')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const popup = document.getElementById('popup')
        popup.classList.add('active')
    })
}


const cancel = document.getElementById('cancel')

cancel.addEventListener('click', async(e) => {
    e.preventDefault()
    const popup = cancel.closest('#popup')
    console.log(popup)
    popup.classList.remove('active')
})

const bananas = document.querySelectorAll('.delete-yes')
//^^^---- could not find a relevant variable name it would let me use, banana === delete
for (let i = 0; i < bananas.length; i++) {
    const banana = bananas[i];

    banana.addEventListener('click', async(e) => {
        e.preventDefault()
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
