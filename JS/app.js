const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pausa = document.querySelector('#pause');
const progress = document.querySelector('#progress');

play.addEventListener('click', handlePlay)
pausa.addEventListener('click', handlePause)


function handlePlay () {
    play.hidden = true;
    pausa.hidden = false;
    video.play();
}

function handlePause () {
    play.hidden = false;
    pausa.hidden = true;
    video.pause();
}


backward.addEventListener('click', handleBackward)

function handleBackward () {
    video.currentTime -= 10;
    // console.log('Retroceder 10 seg', video.currentTime);
}

forward.addEventListener('click', handleForward)
function handleForward () {
    video.currentTime += 10;
    // console.log('Avanzar 10 seg', video.currentTime);
}

video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded () {
    progress.max = video.duration;
    console.log('mi video a cargado',video.duration);
}

function handleTimeUpdate () {
    progress.value = video.currentTime;
    console.log('holi', video.currentTime);
}

progress.addEventListener('input', handleInput)

function handleInput () {
    video.currentTime = progress.value;
    console.log(progress.value)
}