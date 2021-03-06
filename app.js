showitems();
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let txt = document.querySelector("textarea#txt");
  let titletxt = document.getElementById("titletxt");
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
    let myObj = {
      text: txt.value,
      title: titletxt.value,
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txt.value = "";
    titletxt.value = "";
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
    html += `<div id="todo" class="todo">
    <h3>${element.title}<button id="${index}" onclick="edit(this.id)" class="edit"><i class="fas fa-edit"></i></button></h3>
    <h6>${element.text}</h6>
    <button id="${index}" onclick="deletenote(this.id)" class="btn">Delete</button>
  </div>`;
  });
  let div = document.querySelector("div.cont");
  if (notesObj.length != 0) {
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

function edit(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let selectedObj = notesObj[index];
  let txta = `<textarea id="edittxt">${selectedObj.text}</textarea>
  <button id="addedit"><i class="far fa-check-circle"></i></button>`;
  let newtxt = document.getElementById(index).parentNode.parentNode;
  console.log(selectedObj.text);
  newtxt.innerHTML = txta;
  let addedit = document.getElementById("addedit");
  addedit.addEventListener("click", function () {
    let edittxt = document.getElementById("edittxt");
    selectedObj.text = edittxt.value;
    notesObj[index].text = selectedObj.text;
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showitems();
  });
}

let search = document.getElementById("search");
search.addEventListener("input", function (e) {
  let inputxt = search.value;
  let card = document.getElementsByClassName("todo");
  Array.from(card).forEach(function (element) {
    let cardtxt = element.querySelector("h6").innerText;
    if (cardtxt.includes(inputxt)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  // console.log(inputxt);
});
