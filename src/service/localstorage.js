export function setDataToBackend(posts){
    localStorage.setItem("post", JSON.stringify(posts))
}
export function getDataFromBackend(){
    return JSON.parse(localStorage.getItem("post")) || []
}