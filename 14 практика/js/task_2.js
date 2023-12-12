let gallery = document.querySelector('.gallery')

let img = document.querySelector('.img-main')

gallery.onclick = function(e) {
    let target = e.target

    if (target.closest('.gallery-item')) {
        let copy = document.createElement('img')
        copy.src = target.getAttribute('src')

        img.innerHTML = ''

        img.appendChild(copy)
    }
}