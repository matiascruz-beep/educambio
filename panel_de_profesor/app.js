let links = document.querySelectorAll("a")
let main = document.querySelector("main")

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        let id = link.id
        /*location.hash = link.id*/
        let archivo = id + ".html"
        history.pushState(null,"",id)
        /*console.log("ubicacion " + location.hash)*/
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


window.addEventListener("popstate" , () => {
    let archivo  = location.pathname.split("/")[2]+".html"
    console.log("la url es " + archivo)
    let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }

        })
})


/*window.addEventListener("hashchange", () => {
    console.log("cambio la url")
     //["" , "perfil"]
    let archivo = location.hash.split("#")[1] + ".html"
    console.log("archivo es: " + archivo)
    let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }

        })
}) 
        */
