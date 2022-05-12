
let images = [
    'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',  
    'https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg'
]


let img = document.getElementById('img');

function imgDisp(num) {
    let num = Math.floor(Math.random()* images.length);
    img.style.backgroundImage = `url (${images[num]})`;   
}



