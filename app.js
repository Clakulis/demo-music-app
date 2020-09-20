const background = document.getElementById('background');
const thumbnail = document.getElementById('thumbnail');
const song = document.getElementById('song');
const songArtist = document.getElementsByClassName('song-artist');
const songTitle = document.getElementsByClassName('song-title');
const progressBar = document.getElementById('progress-bar');
const pPause = document.getElementById('play-pause');
const nextBtn=document.getElementById('next-song');
const prevBtn=document.getElementById('previous-song')

prevBtn.onclick=prevSong;
nextBtn.onclick=nextSong;

let artists=[
    "Văn Cao",
    "V.A",
];

let titles=[
    "Quốc ca",
    "Đội ca",
];

let songs=[
    "./assets/quocca/QuocCa-V.A-3236254.mp3",
    "./assets/doica/DoiCa-VA_99j.mp3"
];

let covers=[
    "./assets/quocca/maxresdefault.jpg",
    "./assets/doica/unnamed.jpg"
];

let playing =true;

function playPause(){
    if(playing){
        pPause.src='./assets/icon/icons8-pause-button-64.png';
        song.play()
    } else{
        pPause.src="./assets/icon/icons8-circled-play-64.png"
        song.pause()
    }
    playing=!playing;
}

let songIndex=0;
function nextSong(){
    songIndex++;
    if(songIndex>=songs.length){
        songIndex=0;
    }
    song.src=song[songIndex];
    thumbnail.src=covers[songIndex];
    background.src=covers[songIndex];
    songArtist.innerText=artists[songIndex];
    songTitle.innerText=titles[songIndex];

    playing=true;
    playPause();
}

function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    song.src=song[songIndex];
    thumbnail.src=covers[songIndex];
    background.src=covers[songIndex];
    songArtist.innerText=artists[songIndex];
    songTitle.innerText=titles[songIndex];

    playing=true;
    playPause();
}


function formatTime(seconds){
    let minutes=Math.floor(seconds/60);
    seconds=seconds%60;
    if(seconds<10){
        seconds=`0${seconds}`
    }
    return `${minutes}:${seconds}`
}
function updateProgressValue(){
    progressBar.max=song.duration;
    progressBar.value=song.currentTime;

    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime))
    if(document.querySelector('.durationTime').innerHTML == 'NaN:NaN'){
        document.querySelector('.durationTime').innerHTML = '0:00'
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration))
    }
}

setInterval(updateProgressValue,500);

function changeProgressBar(){
    song.currentTime=progressBar.value ;
}

progressBar.onchange=changeProgressBar;