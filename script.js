//Selecting Section
let sectionWithoutQuery = document.getElementById("container"); //1- without querySelector()
let sectionWithQuery = document.querySelector("#container"); //2- with querySelector()

// 3 - List elements with class second

let listSecond = document.querySelectorAll(".second");

// 4 - List elements with class Third inside ol
let listThird = document.querySelectorAll("ol li.third");

// 5 - Add Text Hello
let paragraph = document.createElement("p");
paragraph.textContent = "Hello!";
sectionWithQuery.appendChild(paragraph);

// 6 - Add the class main to footer
let footer = document.querySelector(".footer");
footer.classList.add("main");

// 7 - remove class main to footer
footer.classList.remove("main");

// 8 - create a new li element
let li = document.createElement("li");

// 9 - li text = "four"
li.textContent = "four";

// 10 append li to ul
let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(li);

// 12 - Loop over the lis inside the ole tag and give them a brackground color of green
let ol = document.getElementsByTagName("ol")[0];
let li_List = ol.querySelectorAll("li");
for (let li of li_List) {
  li.style.backgroundColor = "green";
}
// 13 - remove div with class footer
let divFooter = document.querySelector("div.footer");
divFooter.remove();
