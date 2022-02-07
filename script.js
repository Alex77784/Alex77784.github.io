let btnPlay = document.querySelector('.btn_play');

let imgNature = document.querySelector('.img_nature')

let listBird = document.querySelectorAll('[data-para]')

let audio = document.querySelector('.audio')



let btnSolovey = document.querySelector('[data-para="solovey"]');
let btnZhavoronok = document.querySelector('[data-para="zhavoronok"]');
let btnDrozd = document.querySelector('[data-para="drozd"]');
let btnMalinovka = document.querySelector('[data-para="malinovka"]');
let btnSlavka = document.querySelector('[data-para="slavka"]');



btnPlay.addEventListener('click', () => {
    btnPlay.classList.toggle('open')
});

btnPlay.addEventListener('click', () => {
    if (btnPlay.classList.value === 'btn_play') {
        audio.play();
    } else {
        audio.pause();
    }
});


btnSolovey.addEventListener('click', () => {
    imgNature.src = './assets/nature/соловей.jpg';
    audio.src = './assets/audio/соловей.mp3';
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.value = 'btn_play'
});
btnZhavoronok.addEventListener('click', () => {
    imgNature.src = './assets/nature/жаворонок.jpeg';
    audio.src = './assets/audio/жаворонок.mp3';
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.value = 'btn_play'
});
btnDrozd.addEventListener('click', () => {
    imgNature.src = './assets/nature/дрозд.jpg'
    audio.src = './assets/audio/дрозд.mp3';
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.value = 'btn_play'
});
btnMalinovka.addEventListener('click', () => {
    imgNature.src = './assets/nature/малиновка.jpg'
    audio.src = './assets/audio/малиновка.mp3';
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.value = 'btn_play'
});
btnSlavka.addEventListener('click', () => {
    imgNature.src = './assets/nature/славка.jpg'
    audio.src = './assets/audio/славка.mp3';
    audio.currentTime = 0;
    audio.play();
    btnPlay.classList.value = 'btn_play'
});
console.log(
    `Самопроверка!
    
1. Вёрстка +10
- есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать.Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5
- В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5

2. При кликах по интерактивным элементам меняется изображение +10
3. При кликах по интерактивным элементам меняется звук +10
4. Активный в данный момент интерактивный элемент выделяется стилем +10
5. Кнопка Play/Pause +20
- есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10
- внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10
Итого:60 баллов

    `
)















