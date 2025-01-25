function handleDragStart(e){
        console.log(e.target)
}
function handleDrop(e){
    e.preventDefault()
    const pos_x = e.clientX
    const pos_y = e.clientY
    const ele = document.createElement("div")
    ele.style.position="fixed"
    console.log(pos_x,pos_y)
    ele.style.top = pos_y + "px"
    ele.style.left = pos_x + "px"
    ele.innerHTML = "sdsds"
    document.getElementById("right").appendChild(ele)
}
function allowDrop(e){
    e.preventDefault()
    console.log(e.target)
}