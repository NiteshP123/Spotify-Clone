// ==============================
// Spotify Clone JavaScript
// ==============================

const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");

const albumImage = document.getElementById("album-image");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");

const likeBtn = document.getElementById("like-btn");
const cards = document.querySelectorAll(".card");

let currentSong = 0;
let isShuffle = false;
let isRepeat = false;

// ==============================
// Song List
// ==============================

const songs = [
{
title:"Top 50 Global",
artist:"Various Artists",
src:"./assets/songs/song1.mp3",
image:"./assets/card1img.jpeg"
},
{
title:"Trending Mix",
artist:"Various Artists",
src:"./assets/songs/song2.mp3",
image:"./assets/card2img.jpeg"
},
{
title:"Daily Hits",
artist:"Various Artists",
src:"./assets/songs/song3.mp3",
image:"./assets/card3img.jpeg"
},
{
title:"Pop Playlist",
artist:"Various Artists",
src:"./assets/songs/song4.mp3",
image:"./assets/card4img.jpeg"
},
{
title:"Top Charts",
artist:"Various Artists",
src:"./assets/songs/song5.mp3",
image:"./assets/card2img.jpeg"
},
{
title:"Best Songs",
artist:"Various Artists",
src:"./assets/songs/song6.mp3",
image:"./assets/card3img.jpeg"
},
{
title:"Featured 1",
artist:"Various Artists",
src:"./assets/songs/song7.mp3",
image:"./assets/card5img.jpeg"
},
{
title:"Featured 2",
artist:"Various Artists",
src:"./assets/songs/song8.mp3",
image:"./assets/card6img.jpeg"
},
{
title:"Featured 3",
artist:"Various Artists",
src:"./assets/songs/song9.mp3",
image:"./assets/card1img.jpeg"
}
];

// ==============================
// Load Song
// ==============================

function loadSong(index){

currentSong=index;

audio.src=songs[index].src;

songTitle.textContent=songs[index].title;
artistName.textContent=songs[index].artist;
albumImage.src=songs[index].image;

cards.forEach(card=>card.classList.remove("active"));

if(cards[index]){
cards[index].classList.add("active");
}

}

loadSong(0);

// ==============================
// Play Song
// ==============================

function playSong(){

audio.play();
playBtn.src = "./assets/pause.png";

}

// ==============================
// Pause Song
// ==============================

function pauseSong(){

audio.pause();
playBtn.src = "./assets/player_icon3.png";

}

// ==============================
// Play Button
// ==============================

playBtn.addEventListener("click",()=>{

if(audio.paused){

playSong();

}else{

pauseSong();

}

});

// ==============================
// Click Card
// ==============================

cards.forEach((card,index)=>{

card.addEventListener("click",()=>{

loadSong(index);

playSong();

});

});

// ==============================
// Next
// ==============================

nextBtn.addEventListener("click",()=>{

if(isShuffle){

currentSong=Math.floor(Math.random()*songs.length);

}else{

currentSong++;

if(currentSong>=songs.length){

currentSong=0;

}

}

loadSong(currentSong);

playSong();

});

// ==============================
// Previous
// ==============================

prevBtn.addEventListener("click",()=>{

currentSong--;

if(currentSong<0){

currentSong=songs.length-1;

}

loadSong(currentSong);

playSong();

});

// ==============================
// Progress
// ==============================

audio.addEventListener("timeupdate",()=>{

const progressPercent=(audio.currentTime/audio.duration)*100;

progress.value=progressPercent||0;

currentTime.textContent=formatTime(audio.currentTime);

totalTime.textContent=formatTime(audio.duration);

});

// ==============================
// Seek
// ==============================

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;

});

// ==============================
// Volume
// ==============================

volume.addEventListener("input",()=>{

audio.volume=volume.value/100;

});

// ==============================
// Song End
// ==============================

audio.addEventListener("ended",()=>{

if(isRepeat){

playSong();

}else{

nextBtn.click();

}

});

// ==============================
// Shuffle
// ==============================

shuffleBtn.addEventListener("click",()=>{

isShuffle=!isShuffle;

shuffleBtn.style.opacity=isShuffle?1:0.5;

});

// ==============================
// Repeat
// ==============================

repeatBtn.addEventListener("click",()=>{

isRepeat=!isRepeat;

repeatBtn.style.opacity=isRepeat?1:0.5;

});

// ==============================
// Like
// ==============================

likeBtn.addEventListener("click",()=>{

if(likeBtn.classList.contains("fa-regular")){

likeBtn.classList.remove("fa-regular");

likeBtn.classList.add("fa-solid");

likeBtn.style.color="#1db954";

}else{

likeBtn.classList.remove("fa-solid");

likeBtn.classList.add("fa-regular");

likeBtn.style.color="white";

}

});

// ==============================
// Time Format
// ==============================

function formatTime(seconds){

if(isNaN(seconds)) return "00:00";

const mins=Math.floor(seconds/60);

const secs=Math.floor(seconds%60);

return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

}

// ==============================
// Mobile Menu
// ==============================

const menuBtn=document.getElementById("menu-btn");
const sidebar=document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});