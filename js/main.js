var isDrag = false
var xDown
var yDown
var c
div1.addEventListener('mousedown', function (e) {
    if (e.which === 1 /*|| e.which === 2*/) {
        isDrag = true
    }
    // console.log(isDrag)
    c = this.getBoundingClientRect()
    xDown = e.x - c.left + 8
    yDown = e.y - c.top + 8
    // console.log(xDown)
    // console.log(yDown)
    // console.log(c.top)
    // console.log(c.left)
})

document.addEventListener('mouseup', function () {
    isDrag = false
    //console.log(isDrag)
    // xDown = undefined
    // yDown = undefined
})
document.addEventListener('mousemove', function (e) {
    if (isDrag) {
        div1.style.left = e.pageX - xDown + 'px'
        div1.style.top = e.pageY - yDown + 'px'
    }
    // console.log(xDown)
    // console.log(yDown)
})
document.addEventListener('contextmenu', function (e) {
    console.log('test')
    e.preventDefault()
})