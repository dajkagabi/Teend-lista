//Deklarálás
let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//Függvény meghívása
input.addEventListener('keyup', () =>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active')
    }else{
            addBtn.classList.remove('active')
    }
})

//Új lista meghívása

addBtn.addEventListener('click', ()=>{
        if (input.value.trim()!=0){
            let newItem = document.createElement("div");
            newItem.classList.add("item");
            newItem.innerHTML = `
            <p>${input.value}</p>
                        <div class="item-btn">
                            <i class="fa-solid fa-pencil"></i>
                            <i class="fa-solid fa-circle-xmark"></i>
                        </div> `
            tasks.appendChild(newItem);
            input.value = "";
        }else{
            alert('Adj meg egy feladatot"')
        }
})

//Törlés megírása és meghívása

tasks.addEventListener('click', (t) =>{
    if(t.target.classList.contains('fa-circle-xmark')){
        t.target.parentElement.parentElement.remove();
    }
})


//Teljesítés megírása és meghívása
tasks.addEventListener('click', (t) =>{
    if(t.target.classList.contains('fa-pencil')){
        t.target.parentElement.parentElement.classList.toggle('completed');
    }
})