let ip;
let ip_api = 'https://api.ipify.org?format=json';
let intro, punchline;
let joke_api = 'https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart';
let jokeCount = 0;

function setup() {
  createCanvas(400, 400);
  getIP();
  let interval = 1000;
  fill(0);
  setInterval(getJoke,interval);
  setInterval(jokeCounter,interval);
}

function jokeCounter(){
  jokeCount += 1;
  text("Jokes told: ", 20, 300);
  text(jokeCount, 20, 320);
  //int(jokeCount);
}
async function getIP(){
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;
  
}



async function getJoke(){
  let data = await fetch(joke_api);
  let j_data = await data.json();
  intro = j_data.setup;
  punchline = j_data.delivery;
  
}

function draw() {
  background(220);
  text(String(ip), 20, 100);
  text(String(intro), 20, 200);
  text(String(punchline), 20, 220);
  
  jokeCount += 1;
  text("Jokes told: ", 20, 300);
  text(jokeCount, 20, 320);
  
}