const text = document.querySelector('.text')
const countImage = document.querySelector('.countImage')

let currentImage = 1
const totalImage = 4

const showImage = (index) => {
    const image = document.querySelector('.img')
    image.src = `media/image_${index}.jpg`
}
document.querySelector('.btnPrev').addEventListener("click", () => {
    currentImage = (currentImage - 1 + totalImage) % totalImage || totalImage
    showImage(currentImage)
})
document.querySelector('.btnNext').addEventListener("click", () => {
    currentImage = (currentImage % totalImage) + 1
    showImage(currentImage)
})
showImage(currentImage)
setInterval(() => {
    switch (currentImage) {
        case 1:
            text.textContent = "The sky"
            break
        case 2:
            text.textContent = "The sea"
            break
        case 3:
            text.textContent = "The desert"
            break
        case 4:
            text.textContent = "The country"
    }
    countImage.textContent = `${currentImage} / ${totalImage}`
}, 1)