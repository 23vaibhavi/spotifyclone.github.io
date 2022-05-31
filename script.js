console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Happy-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let Me Love You-Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Haye-Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lovestory-Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Xox-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sometimes-Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ek din-Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/8.jpg"},
    {songName: "Pal-Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/9.jpg"},
    {songName: "Hey-Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/10.jpg"}
] 
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//audioElement.play();

// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupadte', ()=>{
    //update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Progress);
    myprogressbar.value = Progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
Array.from (document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' ,()=> {
       console.log(e.target);
       e.target.classList.remove('')
    }) 
})














