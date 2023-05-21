/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const myListDomain = [];

function showDomains() {
  const listDomains = document.getElementById("domains");
  while (listDomains.firstChild) {
    console.log(listDomains.firstChild);
    listDomains.removeChild(listDomains.firstChild);
  }
  myListDomain.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listDomains.appendChild(li);
  });
}

let button = document.getElementById("submit");
button.onclick = GenerateDomain;
function GenerateDomain(evento) {
  const prefixes = ["my", "your", "our", "the", "a", "an"];
  const keywords = [
    "website",
    "blog",
    "portal",
    "hub",
    "center",
    "platform",
    "space"
  ];
  const suffixes = [".com", ".net", ".org", ".io", ".me"];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const name = `${prefix}-${keyword}${suffix}`;
  if (!myListDomain.includes(name)) {
    myListDomain.push(name);
  }
  showDomains();
}
