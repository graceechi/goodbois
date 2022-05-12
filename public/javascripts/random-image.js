

module.exports = function changeBg() {
    let images = ['../images/dog-1.jpg', 'https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg']
    let num = Math.floor(Math.random()* images.length);
    document.body.style.backgroundImage = `url (${images[num]})`
}




