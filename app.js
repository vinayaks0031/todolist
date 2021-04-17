showitems();
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let txt = document.querySelector("textarea#txt");
  if (txt.value.length != 0) {
    // let div = document.createElement("div");
    // div.id = "todo";
    // let n = document.createElement("h6");
    // n.id = "adp";
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(txt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txt.value = "";
    // n.innerText = txt.value;
    // txt.value = "";
    // div.appendChild(n);
    // let h = document.createElement("h2");
    // h.innerText = "Note";
    // let btn = document.createElement("button");
    // btn.className = "btn";
    // btn.innerText = "Delete";
    // div.appendChild(btn);
    // let divcont = document.querySelector("div.cont");
    // divcont.appendChild(div);
    showitems();
  } else {
    alert("Enter some works First!");
  }
});
function showitems() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div id="todo">
    <h3>Note ${index + 1}</h3>
    <h6>${element}</h6>
    <button id="${index}" onclick="deletenote(this.id)" class="btn">Delete</button>
  </div>`;
  });
  let div = document.querySelector("div.cont");
  if (notesObj.lenght != 0) {
    div.innerHTML = html;
  } else {
    div.innerHTML = `<p>No work is added! Add some work.</p>`;
  }
}
function deletenote(index) {
  console.log("this is deletd");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showitems();
}