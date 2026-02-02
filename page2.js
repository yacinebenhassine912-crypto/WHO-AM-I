const seed = localStorage.getItem("seed");
const myChar = localStorage.getItem("playerChar");

const chars = ["P", "A", "B"];
const images = [
  "assets/cpcp/1.jpg",
  "assets/cpcp/2.jpg",
  "assets/cpcp/3.jpg",
  "assets/cpcp/4.jpg",
  "assets/cpcp/5.jpg",
  "assets/cpcp/6.jpg",
  "assets/cpcp/7.jpg",
  "assets/cpcp/8.jpg",
  "assets/cpcp/9.jpg",
  "assets/cpcp/10.jpg",
  "assets/cpcp/11.jpg",
  "assets/cpcp/12.jpg",
  "assets/cpcp/13.jpg",
  "assets/cpcp/14.jpg",
  "assets/cpcp/15.jpg",
  "assets/cpcp/16.jpg",
  "assets/cpcp/17.jpg",
  "assets/cpcp/18.jpg",
  "assets/cpcp/19.jpg",
  "assets/cpcp/20.jpg",
  "assets/cpcp/21.jpg",
  "assets/cpcp/22.jpg",
  "assets/cpcp/23.jpg",
  "assets/cpcp/24.jpg",
  "assets/cpcp/25.jpg",
  "assets/cpcp/26.jpg",
  "assets/cpcp/27.jpg",
  "assets/cpcp/28.jpg",
  "assets/cpcp/29.jpg",
  "assets/cpcp/30.jpg",
  "assets/cpcp/31.jpg",
  "assets/cpcp/32.jpg",
  "assets/cpcp/33.jpg",
  "assets/cpcp/34.jpg",
  "assets/cpcp/35.jpg",
  "assets/cpcp/36.jpg",
  "assets/cpcp/37.jpg",
  "assets/cpcp/38.jpg",
  "assets/cpcp/39.jpg",
  "assets/cpcp/40.jpg",
  "assets/cpcp/41.jpg",
  "assets/cpcp/42.jpg",
  "assets/cpcp/43.jpg",
  "assets/cpcp/44.jpg",
  "assets/cpcp/45.jpg",
  "assets/cpcp/46.jpg",
  "assets/cpcp/47.jpg",
  "assets/cpcp/48.jpg",
  "assets/cpcp/49.jpg",
  "assets/cpcp/50.jpg",
  "assets/cpcp/51.jpg",
  "assets/cpcp/52.jpg",
  "assets/cpcp/53.jpg",
  "assets/cpcp/54.jpg",
  "assets/cpcp/55.jpg",
  "assets/cpcp/56.jpg",
  "assets/cpcp/57.jpg",
  "assets/cpcp/58.jpg",
  "assets/cpcp/59.jpg",
  "assets/cpcp/60.jpg",
  "assets/cpcp/61.jpg"
];


// Seed randomizer
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => (h = Math.imul(48271, h) % 2147483647) / 2147483647;
}

const rand = seededRandom(seed);

// Shuffle helper
function shuffle(arr) {
  return arr.sort(() => rand() - 0.5);
}

// Assign images to characters
const shuffledImages = shuffle([...images]).slice(0, 3);
const mapping = {
  P: shuffledImages[0],
  A: shuffledImages[1],
  B: shuffledImages[2]
};

// Turn order
const turnOrder = shuffle([...chars]);

document.getElementById("turnOrder").innerText =
  `My turn: ${turnOrder.indexOf(myChar) + 1} of 3`;

// Friends only (hide mine)
const friends = chars.filter(c => c !== myChar);

document.getElementById("friend1").innerHTML = `
  <img src="${mapping[friends[0]]}">
  <div class="badge">${friends[0]}</div>
`;

document.getElementById("friend2").innerHTML = `
  <img src="${mapping[friends[1]]}">
  <div class="badge">${friends[1]}</div>
`;

// My card hidden
document.getElementById("myCard").innerHTML = `
  <div class="hidden-card">?</div>
  <div class="badge">${myChar}</div>
`;
