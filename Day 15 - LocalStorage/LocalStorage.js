const itemsList = document.querySelector(".plates");
const addItems = document.querySelector(".add-items");
const items = JSON.parse(localStorage.getItem("items")) || [];
const checkAll = document.querySelector("#checkall-btn");
const uncheckAll = document.querySelector("#uncheckall-btn");
const deleteAll = document.querySelector("#deleteall-btn");

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${
        plate.done ? "checked" : ""
      }></input>
                <label for="item${index}">${plate.text}</label>
            </li>
        `;
    })
    .join("");
}

function toggleDone(event) {
  if (!event.target.matches("input")) return;
  const el = event.target;
  const index = el.dataset.index;

  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);

checkAll.addEventListener("click", () => {
  items.map((items) => {
    items.done = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
});

uncheckAll.addEventListener("click", () => {
  items.map((items) => {
    items.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
});

deleteAll.addEventListener("click", () => {
  items.length = 0;
  localStorage.clear();
  populateList(items, itemsList);
});
