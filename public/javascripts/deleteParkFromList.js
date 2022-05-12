const deleteBtns = document.querySelectorAll('.delete-parklist-button');

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const popup = document.getElementById('popup')
        console.log(popup)
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

const yesBtn = document.querySelector('.delete-yes');

yesBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    console.log(e.target.id);
    const parkId = e.target.id.split('-')[2]
    const res = await fetch(`/profile/parksList/${parkId}`, {
        method: 'DELETE'
    });

    const data = await res.json();
    if (data.message === 'Success') {
        const container = document.getElementById(`${park.id}-parklist-container`);
        container.remove();
    }
})
