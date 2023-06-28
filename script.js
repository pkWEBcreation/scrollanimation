let boxes = document.querySelectorAll('.box')

window.addEventListener("scroll", Animation)

function Animation() {
    let animatonPoint = innerHeight / 5 * 4;

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top
        if (boxTop < animatonPoint) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })

}