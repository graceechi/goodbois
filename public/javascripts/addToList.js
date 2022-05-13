const addToListBtns = document.querySelectorAll('.add-to-list-btn');

for (let i = 0; i < addToListBtns.length; i++) {
    const btn = addToListBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault();
        
        const parkId = e.target.id.split('-')[2]
        const form = getElementById('')
}
