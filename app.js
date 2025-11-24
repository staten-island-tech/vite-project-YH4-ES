
function addList(){
    document.querySelector(".playlistcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="playlistitem">
        <img class="playlistimg" src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F65d1deeee872f584f50b39dfa073245e.1000x1000x1.jpg" alt="Playlist Image">
        <div class="psongcontainer"></div>
    </div>`
);
};
function addSong(){
    document.querySelector(".psongcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class = "songbar">
        </img class="play" scr="">
        </img class="stop" scr="">
        <p class = "bartext">"XYZ SONG"</p>
    </div> `
    )
}
const sample = document.querySelectorAll(".sampleitem");
const sampleArray = Array.from(sample);
let title = ""
function enableSelect(){
    sample.forEach((item) => {
        item.addEventListener("click", () => {
        title = item.getAttribute("data-title")
        console.log(title)
        console.log("john", sampleArray.indexOf(item), title)
        return title;
    });
    });
};
let titlekey ="";
const container = document.querySelectorAll(".playlistitem");
console.log(container, "contain");
function inputSelect(){
    container.forEach((item)=> {
        item.addEventListener("click", () => {
            titlekey = Object.keys(title);
            console.log(titlekey)
            if (titlekey.length != 0) {
                console.log("boingo")
            };
        });
    });
};


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
addSong();
addSong();
addSong();
addSong();
enableSelect();
inputSelect();