const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [
 {
      name: "Farming",
      title: "Farming",
      artist: "Speed Records",

 },
 {
      name: "Befikra",
      title: "Befikra",
      artist: "Sharry Mann",

 },
 {
      name: "Badnam Gabru",
      title: "Badnam Gabru",
      artist: "Masoom Sharma",

 },
]

let isPlaying = false;
let songIndex = 0;

const playMusic =  () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add('anime');
};

const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove('anime');
};

play.addEventListener('click' , () => {
   if (isPlaying){
       pauseMusic();
   }else{
       playMusic();
   }
});

const loadSong = (song) =>{
   title.textContent = song.title;
   artist.textContent = song.artist;
   music.src = "music/" + song.name + ".mp3";
   img.src = "images/" + song.name + ".jpg";
};

loadSong(songs[songIndex]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    if (isPlaying) {
        playMusic();
    }
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    if (isPlaying) {
        playMusic();
    }
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
