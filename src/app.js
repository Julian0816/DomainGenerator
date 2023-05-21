/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#domain").innerHTML = domainGenerator();
  console.log("Hello Rigo from the console!");
};

let domainGenerator = function onload() {
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
  return name;
};
