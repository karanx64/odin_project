const container = document.getElementById("container");

const para1 = document.createElement("p");
const h3_1 = document.createElement("h3");
const div1 = document.createElement("div");
const h1_1 = document.createElement("h1");
const para2 = document.createElement("p");

para1.style.cssText = "color:red";
para1.textContent = "Hey I'm red!";

h3_1.style.cssText = "color:blue";
h3_1.textContent = "I'm a blue h3!";

div1.setAttribute("style", "border:2px solid black; background-color: pink;");

h1_1.textContent = "I'm in a div";
para2.textContent = "ME TOO!";

div1.appendChild(h1_1);
div1.appendChild(para2);

container.appendChild(para1);
container.appendChild(h3_1);
container.appendChild(div1);

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.onclick = () => alert("Hello World : with in-JS onclick");

btn2.addEventListener("click", () => {
  alert("Hello World: with a 'click' event-listener");
});
