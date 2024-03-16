const titels = [
  "Do you wanna Date me!!!",
  "Soch lo ek baar",
  "Ek baar aur soch lo",
  "Maan jao itna bhaw khana thik nahi",
  "Ummhhaaaa! I knew it",
];
const gifs = ["1.gif", "2.gif", "3.gif", "4.gif", "final.gif"];
let count = 0;
const click = () => {
  no.style.bottom = `${Math.floor(Math.random() * 71) + 20}%`;
  no.style.left = `${Math.floor(Math.random() * 61) + 20}%`;
};
const tapNo = () => {
  if (count < 4) {
    title.innerHTML = titels[count];
    img.src = `./assets/${gifs[count]}`;
    count++;
  } else {
    click();
  }
};

const tapYes = () => {
  no.style.display = "none";
  title.innerHTML = titels[4];
  img.src = `./assets/${gifs[4]}`;
};

tapNo();
