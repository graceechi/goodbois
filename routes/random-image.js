
let images = [
    'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',  
    'https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg',
    'https://images.ctfassets.net/f60q1anpxzid/asset-2ee2e43d43b93957a549a3d944297d31/687205eca7d573393bea77d53b2377e5/cute-dog-names-1280.jpg?fm=jpg&fl=progressive&q=50&w=1200'
]


let img = document.getElementById('img');

function imgDisp(num) {
    let num = Math.floor(Math.random()* images.length);
    img.style.backgroundImage = `url (${images[num]})`;   
}

imgDisp();


