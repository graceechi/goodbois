const addToListBtns = document.querySelectorAll('.add-to-list-btn');

for (let i = 0; i < addToListBtns.length; i++) {
    const btn = addToListBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault();

        btn.getElementsByClassName.display ='none'

    })
}