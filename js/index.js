function del(){
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0,value.length-1);
}

const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.ball');

firstThemeBtn.addEventListener('click', () => {
    ballBtn.style.left = '4px';
    document.querySelector('body').classList.remove('two');
    document.querySelector('body').classList.remove('three');
})

secondThemeBtn.addEventListener('click', () => {
    ballBtn.style.left = '30px';
    document.querySelector('body').classList.remove('one');
    document.querySelector('body').classList.remove('three');
    document.querySelector('body').classList.add('two');
})

thirdThemeBtn.addEventListener('click', () => {
    ballBtn.style.left = '62px';
    document.querySelector('body').classList.remove('one');
    document.querySelector('body').classList.remove('two');
    document.querySelector('body').classList.add('three');
})