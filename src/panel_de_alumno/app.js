let links = document.querySelectorAll("a")
let main = document.querySelector("main")

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        let id = link.id
        let archivo = id + ".html"
        let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }

        })
    })
})

function ajax(url,metodo){
    let http_metodo = metodo || "GET"
    let xhr = new XMLHttpRequest
    xhr.open(http_metodo,url)
    xhr.send()
    return xhr
}

