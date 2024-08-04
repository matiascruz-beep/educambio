let links = document.querySelectorAll("a")
let main = document.querySelector("main")

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        let id = link.id
        let archivo = id + ".html"
        let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){  
                main.innerHTML = xhr.response
                history.pushState({
                    template : xhr.response
                },"",id)
            }
        })
        
    })
})

function ajax(url,metodo){
    let http_metodo = metodo || "GET"
    let xhr = new XMLHttpRequest();
    xhr.open(http_metodo,url)
    xhr.send()
    return xhr
}


window.addEventListener("popstate" , (e) => {
    if(e.state.template){
        main.innerHTML = e.state.template
    }else{
        let archivo  = location.pathname.split("/")[2]+".html"
    console.log("la url es " + archivo)
    let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }

        })
    }
    
})

