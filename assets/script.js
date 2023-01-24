let parent = document.getElementById('parent');
let allBtn = document.getElementById('all-btn')
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let mainText = document.getElementById('main-text');
let counter = 0;
let msg = document.getElementById('restart-msg')
let time = document.getElementById('restart-time')
let icon = document.getElementById('restart-icon')
let timeInt = +time.innerText;


btn4.addEventListener('click', () => {
    btn5.classList.add('overflow')
    document.body.style.background = 'black'
    parent.style.background = 'grey'
    parent.style.color = 'white'
    btn5.style.background = 'grey'
    btn5.style.color = 'white'
    btn1.style.background = 'black'
    btn2.style.background = 'black'
    btn1.style.color = 'white'
    btn2.style.color = 'white'
    btn3.style.background = 'grey'
    btn3.style.color = 'white'
})
btn5.addEventListener('click', () => {
    btn4.classList.add('overflow')
    btn5.classList.remove('overflow')
    document.body.style.background = 'white'
    parent.style.background = 'blanchedalmond'
    parent.style.color = 'black'
    btn5.style.background = 'blanchedalmond'
    btn5.style.color = 'black'
    btn1.style.background = 'aquamarine'
    btn2.style.background = 'aquamarine'
    btn1.style.color = 'black'
    btn2.style.color = 'black'
    btn3.style.background = 'blanchedalmond'
    btn3.style.color = 'black'


})

let newFunc = () =>{
    mainText.innerText = 'Are you a Boka-Chodar-Bal!!!'
    btn2.classList.remove('position-1')
    btn2.classList.remove('position-2')
    btn2.classList.remove('position-3')
    btn2.classList.remove('position-4')
    btn2.classList.remove('position-5')
}


btn3.addEventListener('click', ()=>{
   newFunc();
   window.location.reload()
})



let iconInt = +icon.innerText.length;


const newFunction = () => {
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    let timer = setInterval(() => {
        time.textContent = timeInt;
        timeInt--;
        let deletedItem = icon.removeChild(icon.lastElementChild).innerText
        let childElm = document.createElement('span')
        childElm.innerText = deletedItem
        if(timeInt < 0){
            msg.classList.add('hide')
            clearInterval(timer)
            time.textContent = 5;
            timeInt = 5;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
            btn5.disabled = false;    
        }
    }, 1000)
    
    msg.classList.remove('hide')
    mainText.innerText = 'I Knew it !!! Fuck yourself !!!'
    btn2.classList.remove('position-1')
    btn2.classList.remove('position-2')
    btn2.classList.remove('position-3')
    btn2.classList.remove('position-4')
    btn2.classList.remove('position-5')
    
    setTimeout(() =>{
        newFunc()
        window.location.reload()
    }, 5000)
    
}


btn1.addEventListener('click', newFunction)



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
