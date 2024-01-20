const pianoKeys = document.querySelectorAll(".piano-keys .key");

const keyCheck = document.querySelector(" .keys-check input");

const volumeSlide = document.querySelector(".volume-slider input"); 

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key)=>{
    audio.src =` src/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown",(e)=>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const showHideKeys = () => { 
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const handleVolume = (e)=>{
    audio.volume = e.target.value;
};

volumeSlide.addEventListener("input",handleVolume);

keyCheck.addEventListener("click", showHideKeys)