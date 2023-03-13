const playBtn = document.querySelector(".play"), 
    skipForwardBtn = document.querySelector(".skip-forward"),
    skipBack = document.querySelector(".skip-back"),
    shuffle = document.querySelector('.shuffle'),
    img = document.querySelector('.image'),
    title = document.querySelector('.audio-title'),
    singer = document.querySelector('.audio-singer'),
    autor = document.querySelector('.audio-autor'),
    playIcon = document.querySelector('.fa-play'),
    progressContainer = document.querySelector('.progress'),
    progressBar = document.querySelector('.progress-bar'),
    progressHead = document.querySelector('.progress-head'),
    currentTimeHtml = document.querySelector('.current-time'),
    durationHtml = document.querySelector('.duration'),
    version = document.querySelector('.version')
    
this.tracks = [
{
    name: "Oblivion",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-1.png",
    source: "./assets/songs/1-Oblivion.mp3",
    autor: '[Ctrl Ult Delete]',
    url: 'https://www.youtube.com/@CtrlUltDelete',
    color: '#420808',
    id: '0',
    saved: false
},
{
    name: "Ievan Polkka",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-2.png",
    source: "./assets/songs/2-Ievan_Polkka.mp3",
    autor: '[Hatsune Miku]',
    url: 'https://github.com/grabel7',
    color: '#28633B',
    id: '1',
    saved: false
},
{
    name: "Amor de que",
    artist: "Pabllo Vittar ft. Hatsune Miku ",
    cover: "./assets/images/vynil-3.png",
    source: "./assets/songs/3-Amor_de_que.mp3",
    autor: "[Im G Felipe]",
    url: 'https://www.youtube.com/@ImGFelipe',
    color: '#ec5555',
    id: '2',
    saved: false
},
{
    name: "BANDIDA 2.0",
    artist: "Pabllo Vittar ft. Hatsune Miku",
    cover: "./assets/images/vynil-4.png",
    source: "./assets/songs/4-Bandida.mp3",
    autor: "[Im G Felipe]",
    url: 'https://www.youtube.com/@ImGFelipe',
    color: '#eccb55'
},
{
    name: "OH JULIANA",
    artist: "Mc Niack ft. Hatsune Miku",
    cover: "./assets/images/vynil-5.png",
    source: "./assets/songs/5-Juliana.mp3",
    autor: "[Sudonynp]",
    url: 'https://www.youtube.com/@SudonynP',
    color: '#55b2ec'
},
{
    name: "Somebody Miku Used to Know",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-6.png",
    source: "./assets/songs/6-Somebody.mp3",
    autor: "[stepstone]",
    url: 'https://www.youtube.com/@step_stone',
    color: '#ea7b43'
},
{
    name: "Take on Me",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-7.png",
    source: "./assets/songs/7-TakeOnMe.mp3",
    autor: "[stepstone]",
    url: 'https://www.youtube.com/@step_stone',
    color: '#71bca6'
},
{
    name: "Tylko jedno w glowie mam",
    artist: "Polish Dancing Cow ft Hatsune Miku",
    cover: "./assets/images/vynil-8.png",
    source: "./assets/songs/8-polishcow.mp3",
    autor: '[Citrus Man]',
    url: 'https://www.youtube.com/@citrusman9687',
    color: '#c8e5dc'
},
{
    name: "Plastic Love",
    artist: "Mariya Takeuchi ft Hatsune Miku",
    cover: "./assets/images/vynil-9.png",
    source: "./assets/songs/9-plasticlove.mp3",
    autor: '[asterisque]',
    url: 'https://www.youtube.com/@asterisque_vocaloid',
    color: '#499c83'
},
{
    name: "Miku's Little Dark Age",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-10.png",
    source: "./assets/songs/10-darkage.mp3",
    autor: "[Astrophysics]",
    url: "https://www.youtube.com/@Astrophysicsynth",
    color: '#1a372f'
},
{
    name: "Viva la Vida",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-11.png",
    source: "./assets/songs/11-lavida.mp3",
    autor: "[stepstone]",
    url: "https://www.youtube.com/@step_stone",
    color: '#99b96a'
}
,
{
    name: "Deja Vu",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-12.png",
    source: "./assets/songs/12-dejavu.mp3",
    autor: "[stepstone]",
    url: "https://www.youtube.com/@step_stone",
    color: '#6ab99d'
},
{
    name: "Bohemiku Rhapsody",
    artist: "Hatsune Miku",
    cover: "./assets/images/vynil-13.png",
    source: "./assets/songs/13-bohemiku.mp3",
    autor: "[stepstone]",
    url: "https://www.youtube.com/@step_stone",
    color: '#06464d'
},
];


    // Initial values
let audio = null,
    barWidth = null,
    duration = null,
    currentTime = null,
    isTimerPlaying = false,
    currentTrackIndex = 0,
    currentTrack = tracks[0];
shuffle.addEventListener('click', () =>{
    shuffle.classList.toggle('toggled')
    document.querySelector('.skip-forward').click();
    if (shuffle.classList.contains('toggled')){
    tracks.sort((a, b) => 0.5 - Math.random());
    shuffle.setAttribute('src', './assets/images/shuffled.png')
    }})
let heart = document.getElementById('heart');

audio = new Audio();
audio.src = currentTrack.source;
audio.setAttribute("id", "music")
img.src = currentTrack.cover;
title.innerText = currentTrack.name;


 //Volume
function changevolume(amount) {
    audio.volume = amount;
    document.getElementById('percent').innerHTML = 
    `${Number.parseInt(amount * 100)}%`;
  }

//Vynil Clicks
let clicks = 0 
let stocked = ''
img.addEventListener('click', () => {
    var secretaudio = new Audio('./assets/songs/miku-book-boop.mp3');
    clicks++ 
    console.log(clicks)
    secretaudio.volume = 1;
    secretaudio.play();

    if (currentTrack.color != '#44cabf'){stocked = currentTrack.color}

    if (clicks >= 5 && clicks <= 10) {
        img.setAttribute('src', './assets/images/mikuhead.png')
        
        currentTrack.color = '#44cabf'
    } else {
        currentTrack.color = stocked
        img.src = currentTrack.cover;
        if (clicks > 10){clicks = 0}
        
    }
})

playBtn.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        isTimerPlaying = true;
        
    } else {
        audio.pause();
        isTimerPlaying = false;
    }
});

progressContainer.addEventListener('click', (x) => {
    let maxduration = audio.duration;    
    let position = x.pageX - progressContainer.offsetLeft;
    let percentage = (100 * position)/ progressContainer.offsetWidth;
    if(percentage > 100) percentage = 100;
    if(percentage < 0) percentage = 0;

    audio.currentTime = (maxduration * percentage) /100;
    barWidth = percentage + "%";
    progressBar.style.width = `${barWidth}`
    progressHead.style.setProperty("left", `${barWidth}`)
    EachMusic()
})

skipForwardBtn.addEventListener("click", () => {
    if(currentTrackIndex < tracks.length -1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    currentTrack = tracks[currentTrackIndex];

    audio.src = currentTrack.source;
    img.src = currentTrack.cover;
    title.innerText = currentTrack.name;

    singer.innerText = currentTrack.artist;

    barWidth = 0;
    progressBar.style.width = `${barWidth}%`;
    progressHead.style.setProperty('left', `${barWidth}%`)
    currentTimeHtml.innerText = `00:00`;
    durationHtml.innerText = `00:00`

    audio.currentTime = 0;
    audio.src = currentTrack.source;

    EachMusic()
    setTimeout(() => {
        if(isTimerPlaying){
            audio.play();
            
        } else{audio.pause()}
    }, 300)
})

skipBack.addEventListener("click", () => {
    if(currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = this.tracks.length - 1;
    }
    currentTrack = tracks[currentTrackIndex];
    audio.src = currentTrack.source;
    img.src = currentTrack.cover;
    title.innerText = currentTrack.name;
    singer.innerText = currentTrack.artist;

    barWidth = 0;
    progressBar.style.width = `${barWidth}%`;
    progressHead.style.setProperty('left', `${barWidth}%`)
    currentTimeHtml.innerText = `00:00`;
    durationHtml.innerText = `00:00`

    audio.currentTime = 0;
    audio.src = currentTrack.source;
    EachMusic()
    setTimeout(() => {
        if(isTimerPlaying){
            audio.play();
        } else{audio.pause()}
    }, 300)
})



audio.ontimeupdate = function(){
    //Tab Title
    document.title = currentTrack.name + " - MikuProj"
    EachMusic()
    if(audio.duration){
        
        barWidth = (100/ audio.duration) * audio.currentTime;
        
        let durmin = Math.floor(audio.duration/ 60);
        let dursec = Math.floor(audio.duration - durmin * 60);
        let curmin = Math.floor(audio.currentTime / 60);
        let cursec = Math.floor(audio.currentTime - curmin * 60);

        if (durmin < 10) durmin = '0' + durmin;
        if (dursec < 10) dursec = '0' + dursec;
        if (curmin < 10) curmin = '0' + curmin;
        if (cursec < 10) cursec = '0' + cursec;

        duration = durmin + ":" + dursec;
        currentTime = curmin + ":" + cursec;

        // Skip song when finished
        if (cursec == dursec && curmin == durmin) {
        if(currentTrackIndex < tracks.length -1) {
            currentTrackIndex++;
        } else {
            currentTrackIndex = 0;
        }
        EachMusic()
        currentTrack = tracks[currentTrackIndex];
    
        audio.src = currentTrack.source;
        img.src = currentTrack.cover;
        title.innerText = currentTrack.name;
        singer.innerText = currentTrack.artist;
    
        barWidth = 0;
        progressBar.style.width = `${barWidth}%`;
        progressHead.style.setProperty('left', `${barWidth}%`)
        currentTimeHtml.innerText = `00:00`;
        durationHtml.innerText = `00:00`
    
        audio.currentTime = 0;
        audio.src = currentTrack.source;
        audio.play()    
    }
    
        progressBar.style.width = `${barWidth}%`;
        progressHead.style.setProperty('left', `${barWidth}%`)
        currentTimeHtml.innerText = `${currentTime}`;
        durationHtml.innerText = `${duration}`
        const blob = document.querySelector('.pulse')
        if(isTimerPlaying){
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            img.classList.add('spinning');
            blob.classList.add('blob')
            blob.classList.remove('stop')
        } else {
            playIcon.classList.add('fa-play');
            playIcon.classList.remove('fa-pause');
            img.classList.remove('spinning')
            blob.classList.remove('blob')
            blob.classList.add('stop')
        }

    }
}



function load(){
    //Change Version
    version.innerHTML = '<h6 class="foot version"><a href="changelog.html" target="_blank">v1.1</a></h6>'
    EachMusic()
}

function EachMusic(){

    //Artist credits
    singer.innerText = currentTrack.artist;
    autor.innerHTML = `<a target="_blank" href=${currentTrack.url}>${currentTrack.autor}</a>`

    //Change color of each music
    document.body.style.background = `linear-gradient(0deg, #0A203B 0%, ${currentTrack.color}`

}

