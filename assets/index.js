let btnShare = document.getElementById('btn_share')
let btnShareModal= document.getElementById('btn_share_modal')
let modalArrow=document.getElementById('modalArrow')
let social = document.getElementById('social')
let isModal =  true

let toggleModal = ()=>{
    if (screen.width>640){
        if(isModal){
            social.style.display="flex"
            btnShareModal.style.display="none"
            modalArrow.style.display="flex"
            social.style.top=(btnShare.getBoundingClientRect().top-56-10)+'px'
            social.style.left=(btnShare.getBoundingClientRect().left-101+17)+'px'
            modalArrow.style.top=(btnShare.getBoundingClientRect().top-10)+'px'
            modalArrow.style.left=(btnShare.getBoundingClientRect().left+8)+'px'
            isModal=false
        } else{
            social.style.display="none"
            modalArrow.style.display="none"
            btnShareModal.style.display="inLine-block"
            isModal=true
        }
    }else{
        if(isModal){
            modal.style.display="none"
            social.style.display="flex"
            isModal=false
        } else{
            modal.style.display="block"
            social.style.display="none"
            isModal=true
        }
    }
}

let setup = ()=>{
    if(screen.width<=640){
        btnShareModal.style.display="inLine-block"
    }else
    {
        modal.style.display="block"
    }
    toggleModal()
    toggleModal()
}

btnShare.addEventListener('click',toggleModal)
btnShareModal.addEventListener('click', toggleModal)
window.addEventListener('resize',setup)

