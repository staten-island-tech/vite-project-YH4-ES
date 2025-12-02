
import './style.css'
let i =0
function addList(){
    document.querySelector(".playlistcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="playlistitem" data-playlist0 = "${i}">
        <img class="playlistimg" src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F65d1deeee872f584f50b39dfa073245e.1000x1000x1.jpg" alt="Playlist Image">
        <div class="psongcontainer" data-playlist = "${i}"></div>
    </div>`
    
    );
i++
};
let selectedContainer = i
function addSong(title, song){
    document.querySelector(`[data-playlist = '${selectedContainer}']`).insertAdjacentHTML( //I'm sure this is the worst method possible but i am very proud
    "beforeend",
    `<div class = "songbar">
        </img class="play" scr="">
        </img class="stop" scr="">
        <p class = "bartext">${title}</p>
        <audio id = "song" autostart = "false" src = "${song}" loop ></audio>
    </div> `
    
    );
    console.log(document.getElementById("id"))
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
addSong();

const container = document.querySelectorAll(".playlistitem");

console.log(container, "contain");
function inputSelect(){
    container.forEach((item)=> {
        item.addEventListener("click", () => {
            titlekey = Object.keys(data.title);
            console.log(titlekey)
            if (titlekey.length != 0) {
                console.log(data.title)
                console.log(data.song)
                console.log(item.getAttribute("data-playlist0"))
                selectedContainer = item.getAttribute("data-playlist0")
                addSong(data.title, data.song)
            };
        });
    });
};
enableSelect();
inputSelect();
let doe = document.querySelector("[data-playlist = '0']");
console.log(doe);

console.log(document.querySelectorAll(".psongcontainer"));

function makeSongPlay(){
    
}