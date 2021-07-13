let input = document.querySelector('#agregar');
let btn = document.querySelector('#boton');
let list = document.querySelector('#lista');
let el = document.getElementsByTagName('li');

btn.addEventListener('click',() => {
    let txt = input.value;
    if(txt === ""){
        alert('tenés que escribir algo');
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})

list.addEventListener('click', e => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle('tarea-hecha')
    }
})