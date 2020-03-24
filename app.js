const form = document.getElementById("addform");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItem);

//add item
function addItem(e) {
  e.preventDefault();
  //get input value
  const newItem = document.getElementById("item").value;
  //create new li element
  let li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  // add text node with input value and append
  li.appendChild(document.createTextNode(newItem));
  console.log(li);
  // create delete button
  const deleteBtn = document.createElement("button");
  // add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // append button to li
  li.appendChild(deleteBtn);
  //append li to list
  itemList.appendChild(li);
  console.log(itemList);
 }

//remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this item?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItem(e) {
  //convert text to lowercase
  const text = e.target.value.toLowerCase();
  //get li's
  const items = itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(function(item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
