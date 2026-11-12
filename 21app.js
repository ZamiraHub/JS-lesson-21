//todo
const input=document.querySelector('#inputText')
const add=document.querySelector('#add')
const list=document.querySelector('#list')

add.onclick=(e)=>{
    e.preventDefault()
    console.log(input.value);
    if(!input.value)return;
    
    //litag
    const liTag=document.createElement('li')
    list.appendChild(liTag)
    liTag.className="list-group-item d flex justify content-between align-items senter"

//span
const spanTag=document.createElement('span')
liTag.appendChild(spanTag)
spanTag.innerHTML=input.value

//delete
const delBtn=document.createElement('button')
liTag.appendChild(delBtn)
delBtn.innerHTML=`<i class="bi bi-basket2"></i>`
delBtn.className='btn btn-outline-danger'
delBtn.onclick=()=>{
    console.log();
    liTag.remove()
}
input.value=''


}

