import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { footer } from "./components/navbar.js";

document.getElementById("footer").innerHTML = footer();

import { sidebar } from "./components/navbar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import { newsSlider } from "./components/navbar.js";

document.getElementById("news_slider").innerHTML = newsSlider();

import { rightSidebar } from "./components/navbar.js";

document.getElementById("right_sidebar").innerHTML = rightSidebar();

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

// disabling the button and search input when page loads
// let query = document.getElementById("query");
// query.disabled = true;
// let searchbtn = document.getElementById("SearchButton");
// searchbtn.disabled = true;
// searchbtn.style.backgroundColor = "#ffde2f";
// searchbtn.style.border = "none";
// searchbtn.innerText = "";

// Adding some style and enabling the button and search input
// document.querySelector("#searchNews").addEventListener("click", () => {
//   query.disabled = false;
//   query.style.backgroundColor = "White";
//   query.placeholder = "Search News Here";
//   query.style.padding = "15px";
//   document.getElementById("SearchButton").style.padding = "12px";
//   document.querySelector("#searchNews").disabled = true;
//   searchbtn.innerText = "Search";
//   searchbtn.disabled = false;
//   searchbtn.style.border = "black";
//   searchbtn.style.cursor = "pointer";
// });

// adding event to search button to fetch the data from api
// let Search = document.getElementById("SearchButton");
// Search.addEventListener("click", () => {
//   SearchNews();
// });

// fetching data from api but works only for two keyWords "tesla" and "twitter"
// const SearchNews = async () => {
//   let query = document.getElementById("query").value;

//   try {
//     let res = await fetch(`https://masai-api.herokuapp.com/news?q=${query}`);
//     let data = await res.json();
//     console.log(data.articles);
//     displayData(data.articles);
//   } catch (error) {
//     console.log(error);
//   }
// };

// Showing Fetch data to container div you can append data to your respective div

// const photos = async () => {
//   try {
//     let res = await fetch(
//       `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
//     );
//     let data = await res.json();
//     console.log(data.articles);
//     displayData(data.articles);
//   } catch (error) {
//     console.log(error);
//   }
// };

// photos();

function append() {
  let data = JSON.parse(localStorage.getItem("detailed_news"));

  let cont = document.getElementById("indian-news");

  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = data.urlToImage;

  let title = document.createElement("h3");
  title.innerText = data.title;

  let des = document.createElement("p");
  des.innerText = data.description;

  let conten = document.createElement("p");
  conten.innerText = data.content;

  div.append(img, title, des, conten);

  cont.append(div);

  console.log("hii");
}

append();
