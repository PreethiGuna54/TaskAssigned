let wrapper = document.getElementById('wrapper');

//wrapper.classList.add("position-relative")

let div1 =document.createElement('div')
div1.classList.add("bottom-50","start-75")
div1.style.color="White"
//div1.style.backgroundColor="hotpink"
div1.setAttribute('id','timer')
div1.innerHTML=res()

wrapper.append(div1)
document.body.append(wrapper)

function res(){
    setTimeout(()=>{
        div1.style.backgroundColor="Gold"
        div1.innerHTML=10 
        setTimeout(()=>{
            div1.style.backgroundColor="violet"
            div1.innerHTML=9 
            setTimeout(()=>{
                div1.style.backgroundColor="Indigo"
                div1.innerHTML=8 
                setTimeout(()=>{
                    div1.style.backgroundColor="Blue"
                    div1.innerHTML=7
                    setTimeout(()=>{
                        div1.style.backgroundColor="Green"
                        div1.innerHTML=6
                        setTimeout(()=>{
                            div1.style.backgroundColor="yellow"
                            div1.innerHTML=5
                            setTimeout(()=>{
                                div1.style.backgroundColor="Orange"
                                div1.innerHTML=4
                                setTimeout(()=>{
                                    div1.style.backgroundColor="Red"
                                    div1.innerHTML=3 
                                    setTimeout(()=>{
                                        div1.style.backgroundColor="Gray"
                                        div1.innerHTML=2
                                        setTimeout(()=>{
                                            div1.style.backgroundColor="skyblue"
                                            div1.innerHTML=1
                                            setTimeout(()=>{
                                                div1.style.backgroundColor="Purple"
                                                div1.innerHTML="Happy IndependenceDay"

                                            },1000) 
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)    
    return div1.innerHTML
}
