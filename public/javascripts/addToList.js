const addToListBtns = document.querySelectorAll('.add-to-list-btn');

for (let i = 0; i < addToListBtns.length; i++) {
    const btn = addToListBtns[i];

    btn,addEventListener('click', async(e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const park = formData.get('park');
        const user = localStorage.getItem()
        const body = { park, user }

        // console.log(e.target.id);
        // const parkId = e.target.id.split('-')
    })
}
