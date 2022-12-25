var j = document.getElementById("a");
var u = document.getElementById("y");
var p = document.getElementById("o");
var y = document.getElementById("r");
var t = document.getElementById("i");
var e = document.getElementById("n");
var r = document.getElementById("d");
var a = document.getElementById("e")
var jupyter = document.getElementById("complete");

j.addEventListener("click", () => {
  j.style.display = "none";
  u.style.display = "block";
});
u.addEventListener("click", () => {
  u.style.display = "none";
  p.style.display = "block";
});
p.addEventListener("click", () => {
  p.style.display = "none";
  y.style.display = "block";
});
y.addEventListener("click", () => {
  y.style.display = "none";
  t.style.display = "block";
});
t.addEventListener("click", () => {
  t.style.display = "none";
  e.style.display = "block";
});
e.addEventListener("click", () => {
  e.style.display = "none";
  r.style.display = "block";
});
r.addEventListener("click", () => {
  r.style.display = "none";
  a.style.display = "block";
});
a.addEventListener("click", () => {
    a.style.display = "none";
    jupyter.style.display = "block";
}) 
jupyter.addEventListener("click", () => {
  jupyter.style.display = "none";
  j.style.display = "block";
});