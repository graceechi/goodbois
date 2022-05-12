const deleteBtns = document.querySelectorAll('.delete-parklist-button');

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const popupId = e.target.id.split('-')[2];
        const popup = document.getElementById(`popup-${popupId}`);
        // console.log(popup)
        popup.classList.add('active')
    })
}

const cancel = document.getElementById('cancel');

cancel.addEventListener('click', async(e) => {
    e.preventDefault()
    const popup = cancel.closest('#popup')
    console.log(popup)
    popup.classList.remove('active')
})

const yesBtns = document.querySelectorAll('.delete-yes');

for (let i = 0; i < yesBtns.length; i++) {
    const yes = yesBtns[i];

    yes.addEventListener('click', async(e) => {
        e.preventDefault();
        console.log(e.target);
        const parkId = e.target.id.split('-')[2]
        const res = await fetch(`/profile/${parkId}`, {
            method: 'DELETE'
        });

        const data = await res.json();
        if (data.message === 'Success') {
            const container = document.getElementById(`${parkId}-parklist-container`);
            container.remove();
        }
    })
}
