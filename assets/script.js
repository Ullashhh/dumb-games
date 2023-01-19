let parent = document.getElementById('parent');
let allBtn = document.getElementById('all-btn')
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let mainText = document.getElementById('main-text');
let counter = 0;

btn3.addEventListener('click', ()=>{
    mainText.innerText = 'Are you a Boka-Chodar-Bal!!!'
    btn2.classList.remove('position-1')
    btn2.classList.remove('position-2')
    btn2.classList.remove('position-3')
    btn2.classList.remove('position-4')
    btn2.classList.remove('position-5')
})


const newFunction = () => {
    mainText.innerText = 'I Knew it !!! Fuck yourself !!!'
    btn2.classList.remove('position-1')
    btn2.classList.remove('position-2')
    btn2.classList.remove('position-3')
    btn2.classList.remove('position-4')
    btn2.classList.remove('position-5')
    setTimeout(() =>{
        location.reload();
    }, 5000)
}

let func = btn1.addEventListener('click', newFunction)



btn2.addEventListener('mouseover', () => {
    counter++;
    if(counter % 5 === 0){
        btn2.classList.add('position-5')
        btn2.classList.remove('position-1')
        btn2.classList.remove('position-2')
        btn2.classList.remove('position-3')
        btn2.classList.remove('position-4')
    }
    else if(counter % 4 === 0){
        btn2.classList.remove('position-2');
        btn2.classList.remove('position-3');
        btn2.classList.remove('position-1');
        btn2.classList.remove('position-5');
        btn2.classList.add('position-4');
    }
    else if(counter % 3 === 0){
        btn2.classList.remove('position-1')
        btn2.classList.remove('position-2')
        btn2.classList.remove('position-4')
        btn2.classList.remove('position-5')
        btn2.classList.add('position-3');
    }
    else if(counter % 2 === 1){
        btn2.classList.remove('position-2')
        btn2.classList.remove('position-3')
        btn2.classList.remove('position-4')
        btn2.classList.remove('position-5')
        btn2.classList.add('position-1');
    }
    else if(counter % 2 === 0){
        btn2.classList.toggle('position-1')
        btn2.classList.toggle('position-2')
        btn2.classList.toggle('position-3')
        btn2.classList.toggle('position-4')
        btn2.classList.add('position-5');
    }
})