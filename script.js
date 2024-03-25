let button=document.querySelectorAll("button")
        let h1=document.querySelectorAll("h1")
        button[0].addEventListener("click",()=>{
            h1[1].innerHTML++
        })
        button[1].addEventListener("click",()=>{
            h1[1].innerHTML=0
        })
        button[2].addEventListener("click",()=>{
            h1[1].innerHTML--
            if(h1[1].innerHTML<=0){
                h1[1].innerHTML=0
            }
        })