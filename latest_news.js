import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { newsSlider } from "./components/navbar.js";

document.getElementById("news_slider").innerHTML = newsSlider();

import { sidebar } from "./components/navbar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import { rightSidebar } from "./components/navbar.js";

document.getElementById("right_sidebar").innerHTML = rightSidebar();

import { footer } from "./components/navbar.js";

document.getElementById("footer").innerHTML = footer();

let query = document.getElementById("query");
query.disabled = true;
let searchbtn = document.getElementById("SearchButton");
searchbtn.disabled = true;
searchbtn.style.backgroundColor = "#ffde2f";
searchbtn.style.border = "none";
searchbtn.innerText = "";

// Adding some style and enabling the button and search input
document.querySelector("#searchNews").addEventListener("click", () => {
  query.disabled = false;
  query.style.backgroundColor = "White";
  query.placeholder = "Search News Here";
  query.style.padding = "15px";
  document.getElementById("SearchButton").style.padding = "12px";
  document.querySelector("#searchNews").disabled = true;
  searchbtn.innerText = "Search";
  searchbtn.disabled = false;
  searchbtn.style.border = "black";
  searchbtn.style.cursor = "pointer";
});

// adding event to search button to fetch the data from api
let Search = document.getElementById("SearchButton");
Search.addEventListener("click", () => {
  SearchNews();
});

// fetching data from api but works only for two keyWords "tesla" and "twitter"
const SearchNews = async () => {
  let query = document.getElementById("query").value;

  try {
    let res = await fetch(`https://masai-api.herokuapp.com/news?q=${query}`);
    let data = await res.json();
    console.log(data.articles);
    displayData(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  let container = document.getElementById("middle");
  container.innerHTML = null;

  data.forEach((ele) => {
    // console.log('gfg')

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.urlToImage;

    let title = document.createElement("h4");
    title.innerText = ele.title;

    div.append(image, title);
    container.append(div);
  });
};

let poster = [
  "Three new credit card rules coming into effect from Oct.",
  "Ankita Bhandari murder case to be tried in fast-track court; Uttarakhand CM announces Rs 25 lakh compensation for family",
  "Gandhis still keen on Gehlot contesting party prez poll...",
  "Amid F-16 strain, US talks of India-Pakistan dialogue",
  "Centre bans PFI for 5 years under anti-terror law UAPA ...",
];

let id;
function Start() {
  let container = document.getElementById("breaking_news");

  let i = 0;

  let p = document.createElement("p");

  let id = setInterval(function () {
    if (i === 5) {
      i = 0;
    }
    p.innerText = poster[i];
    container.append(p);
    i++;
  }, 2000);
}

function Stop() {
  clearInterval(id);
}
Start();

const arr = [
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/28/2542170-stations-tb-ani.jpg",
    title: "Centre gives sneak peek at Indian Railway Stations of the...",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/17/2539410-pm1.jpg",
    title: "PM Narendra Modis Birthday: 5 schemes launched by Prime Mini...",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/16/2539086-2532577-leopard.jpg",
    title: "Fascinating facts about all 8 big cats...",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/14/2538609-chenab-bridge.jpg",
    title: "Chenab Bridge: Indian Railways shares stunning pictures of the...",
  },
  {
    url: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/17/2539361-cheetah.jpg",
    title: "In Pics: PM Modi releases 8 cheetahs from Namibia at Kuno Na...",
  },
];

const slideShow = () => {
  let count = 0;
  let div = document.getElementById("1");

  let img = document.createElement("img");
  img.src = arr[0].url;

  let p = document.createElement("p");
  p.innerText = arr[0].title;

  div.append(img, p);
  count = count + 1;

  setInterval(function () {
    if (count == 4) {
      count = 0;
    }
    img.src = arr[count].url;
    p.innerText = arr[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};

slideShow();

const slideShow2 = () => {
  let count = 1;
  let div = document.getElementById("2");

  let img = document.createElement("img");
  img.src = arr[1].url;

  let p = document.createElement("p");
  p.innerText = arr[1].title;
  div.append(img, p);

  count = count + 1;

  setInterval(function () {
    if (count == 5) {
      count = 1;
    }
    img.src = arr[count].url;
    p.innerText = arr[count].title;
    count++;
    div.append(img, p);
  }, 4000);
};
slideShow2();

const getData = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`
    );

    let data = await res.json();
    console.log(data);
    appendData(data);

    // https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY
    // 10eb02d414a64a8a9f7708853cd80fc8
  } catch (e) {
    console.log(e);
  }
};
getData();

function appendData(data) {
  let results = document.getElementById("results");
  // results.innerHTML=null

  data.articles.forEach((ele) => {
    // console.log(ele)
    if (ele.urlToImage !== null) {
      let div = document.createElement("div");
      let h1 = document.createElement("p");
      h1.innerHTML = ele.title;
      let img = document.createElement("img");
      img.src = ele.urlToImage;

      div.addEventListener("click", function () {
        Click(ele);
      });

      div.append(img, h1);
      results.append(div);
    }
  });
}
function Click(ele) {
  localStorage.setItem("results", JSON.stringify(ele));
  console.log(ele);
  window.location.href = "./detailed.html";
}
