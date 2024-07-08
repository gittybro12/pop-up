document.addEventListener("DOMContentLoaded",()=>{

    const info = document.querySelector('.information')
    const low = document.querySelector('.btn')
    const close = document.querySelector('.close')
    
    low.style.display = "none"
    low.addEventListener("click",display)
    
    function display(){
        info.style.display ="block"
    }
    
    close.addEventListener('click',()=>{
        info.style.display ="none"
        low.innerHTML = "click to display again"
        low.style.display = "block"
        
    })
    window.addEventListener("load",function(){
        this.setTimeout(function(){
            info.style.display ="block"
        },5000)
    })
})