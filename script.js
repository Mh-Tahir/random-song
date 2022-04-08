const array = [
  { name: "Stairway to Heaven", band: "Led Zeppelin" },
  { name: "Yellow Submarine", band: "Beatles" },
  { name: "Back in Black", band: "AC DC" },
  { name: "Yesterday", band: "Beatles" },
  { name: "Thunderstruck", band: "AC DC" },
];

const songName = document.querySelector(".song");
// const songName = $(".song");
const bandName = document.querySelector(".band");
// const bandName = $(".band");
const btn = document.querySelector(".new");
// const btn = $(".new");

function generateSong() {
  const songIndex = Math.floor(Math.random() * array.length);
  const newSong = array[songIndex];
  songName.innerHTML = newSong.name.toUpperCase();
  bandName.innerHTML = newSong.band;
}

btn.addEventListener("click", generateSong);

const container = document.querySelector(".container");

container.addEventListener("mouseenter", () => container.classList.add("hovered"));
container.addEventListener("mouseleave", () => container.classList.remove("hovered"));

let par = document.createElement("p");
par.textContent = "Текущее время";

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  addBtn.parentNode.appendChild(par);
  let date = new Date();
  setInterval(() => {
    let newDate = new Date();
    let difference = newDate.getSeconds() - date.getSeconds();
    par.innerHTML = "Прошло " + difference + " секунд!";
  }, 1000);
  // setTimeout(() => container.removeChild(par), 5000);
});

document.querySelector(".txt-input").addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft" || e.code === "KeyA" || e.code === "KeyS") {
    alert(document.querySelector(".txt-input").value);
    // $(".txt-input").css("backgroundColor", "#222eee");
    document.querySelector(".txt-input").style.backgroundColor = "#222eee";
  }
});

generateSong();

document.body.addEventListener("click", (event) => console.log(event.target.value));
