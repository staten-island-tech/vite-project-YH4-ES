

import './style.css'
let lastSong=""
function makeSongPlay(selectBar, whichlist){
    let currentBar = ""
    
    let playedsong = document.querySelector(`[data-song = "${selectBar}"]`)
    let player = document.querySelector(`[data-play = "${selectBar}"]`)
    player.addEventListener("click", (e) => { 
        document.querySelectorAll('audio').forEach(el => el.pause());
        let currentTar = e.currentTarget
        currentBar = currentTar.getAttribute("data-play")
        console.log(currentBar)
        playedsong = document.querySelector(`[data-song = "${currentBar}"]`)
        console.log(playedsong)
        let nextSong = {
        nextbar: selectBar,
        nextlist: whichlist,
        }
        if (playedsong !== lastSong){
            playedsong.play()
            console.log("playing")
            console.log(nextSong)
            lastSong = playedsong
        } else {
            lastSong = ""
            playedsong.currentTime = 0
        }
        
        
        
    });
    playedsong.addEventListener('ended', () => {
        console.log("nextbar test", Number(selectBar) + 1)
        console.log("selectbar", selectBar)
        let nextBar = document.querySelector(`[data-song = "${Number(selectBar) + 1}"]`)
        console.log("bimbob", nextBar)
        console.log(nextBar.getAttribute('data-whichlist'))
        let nextBarlist = nextBar.getAttribute('data-whichlist')
        console.log(nextBarlist, whichlist)
        if (nextBarlist == whichlist){
            console.log("bald")
            nextBar.play()
        } else {
            console.log("endoflist")
        }

    })
    
    
}



let i =0
let thumb = ""
let index = ""
function addList(){
    document.querySelector(".playlistcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="playlistitem" data-playlist0 = "${i}">
        <img class="playlistimg" data-image="${i}" src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F65d1deeee872f584f50b39dfa073245e.1000x1000x1.jpg" alt="Playlist Image">
        <div class="psongcontainer" data-playlist = "${i}"></div>
        <div class="thumbchange" data-thumb = "${i}" data-click = "">Change Thumb</div>
    </div>
    `
    
    
    );
    document.querySelector(`[data-image = '${i}']`).dataset.click = `${i}`
    document.querySelector(`[data-thumb = '${i}']`).addEventListener("click", (e) => {
        let sign = prompt("Imagelink.")
        console.log(sign)
        let thumb = e.currentTarget
        let index = thumb.dataset.thumb
        console.log(index)
        console.log(document.querySelector(`[data-image = '${index}']`))
        document.querySelector(`[data-image = '${index}']`).src = `${sign}`
        
    }

    )
    i++
};
let selectedContainer = i
let selectedSong = 0
function addSong(title, song){
    console.log(song)
    let whichlist = document.querySelector(`[data-playlist = '${selectedContainer}']`).closest(".playlistitem")
    whichlist = whichlist.getAttribute('data-playlist0')
    document.querySelector(`[data-playlist = '${selectedContainer}']`).insertAdjacentHTML( //I'm sure this is the worst method possible but i am very proud. Edit: nevermind
    "beforeend",
    `<div class = "songbar" data-bar="${selectedSong}">
        <img class="play" src="Play button.png" alt="jogn" height = "30" data-play="${selectedSong}">
        <audio id = "song" autostart = "false" src = "${song}" data-song="${selectedSong}" data-whichlist = "${whichlist}"></audio>
        <img class="stop" src="" hidden data-stop="${selectedSong}">
        <p class = "bartext">${title}</p>
        
    </div> `
    
    );
    let audiosong = document.querySelector(`[data-song = '${selectedSong}']`) //I dont know man
    audiosong.src = song
    console.log(document.getElementById("song"))
    makeSongPlay(selectedSong, whichlist)
    selectedSong++
    console.log("haha", whichlist)
    return whichlist
    
    
}
const sample = document.querySelectorAll(".sampleitem");
const sampleArray = Array.from(sample);
let data = {
    title: "",
    song: ""
}
function enableSelect(){
    sample.forEach((item) => {
        item.addEventListener("click", () => {
        data.title = item.getAttribute('data-title')
        data.song = item.getAttribute("data-song")
        console.log(data.title)
        console.log("john", sampleArray.indexOf(item), data.title, data.song)
        return data
    });
    });
};
let titlekey ="";



console.log(sample)
addList();
addList();
addList();
addList();
addList();
addList();
addList();
addList();
addList();
addList();


let container = ""
console.log(container, "contain");
function inputSelect(){
    container = document.querySelectorAll(".playlistitem");
    container.forEach((item)=> {
        item.addEventListener("click", () => {
            titlekey = Object.keys(data.title);
            console.log(titlekey)
            if (titlekey.length != 0) {
                console.log(data.title)
                
                console.log(item.getAttribute("data-playlist0"))
                selectedContainer = item.getAttribute("data-playlist0")
                addSong(data.title, data.song)
                console.log(data.song)
                data = {
                    title: "",
                    song: ""
                }
                
            };
        });
    });
};
enableSelect();
inputSelect();
let doe = document.querySelector("[data-playlist = '0']");
console.log(doe);

console.log(document.querySelectorAll(".psongcontainer"));

document.querySelector(".addlist").addEventListener("click", () => {
    addList();
    inputSelect();
})

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault()
    var formdata = new FormData(e.target)
    console.log(Object.fromEntries(formdata))
    let datatemp = Object.fromEntries(formdata)
    data.title = datatemp.title
    data.song = datatemp.songlink

})

document.querySelector(".darkmode").addEventListener("click", () => {
    if (document.body.classList.contains("bodylight")) {
        document.body.classList.add("bodydark");
        document.body.classList.remove("bodylight");
        document.querySelector(".titletextlight").classList.add("titletextdark")
        document.querySelector(".titletextlight").classList.remove("titletextlight")
        document.querySelector(".subtitlelight").classList.add("subtitledark")
        document.querySelector(".subtitlelight").classList.remove("subtitlelight")
        document.querySelector(".formlight").classList.add("formdark")
        document.querySelector(".formlight").classList.remove("formlight")
        document.querySelector(".darkmode").classList.add("lightmode")
        document.querySelector(".darkmode").classList.remove("darkmode")
        document.querySelector(".lightmode").textContent = "Say hello back to light mode?"
        document.querySelector(".annoyingtext").classList.add("lessannoyingtext")
        document.querySelector(".annoyingtext").classList.remove("annoyingtext")
        document.querySelector(".playlistcontainer").classList.add("playlistcontainerdark")
        document.querySelector(".playlistcontainer").classList.remove("playlistcontainer")


    }
    else {
        document.body.classList.add("bodylight");
        document.body.classList.remove("bodydark");
        document.querySelector(".titletextdark").classList.add("titletextlight")
        document.querySelector(".titletextdark").classList.remove("titletextdark")
        document.querySelector(".subtitledark").classList.add("subtitlelight")
        document.querySelector(".subtitledark").classList.remove("subtitledark")
        document.querySelector(".formdark").classList.add("formlight")
        document.querySelector(".formdark").classList.remove("formdark")
        document.querySelector(".lightmode").classList.add("darkmode")
        document.querySelector(".lightmode").classList.remove("lightmode")
        document.querySelector(".darkmode").textContent = "Wow, boring"
        document.querySelector(".lessannoyingtext").classList.add("annoyingtext")
        document.querySelector(".lessannoyingtext").classList.remove("lessannoyingtext")
        document.querySelector(".playlistcontainerdark").classList.add("playlistcontainer")
        document.querySelector(".playlistcontainerdark").classList.remove("playlistcontainerdark")
    }
})

