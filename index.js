const form = document.getElementById('addform');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// add event to form
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItem)

function addItem(e) 
{
   e.preventDefault();
   //get value of input field
   const newItem = document.getElementById('item').value;
   //create new li
   const li = document.createElement('li');
   //li className
   li.className = 'list-group-item';
   //append li
   li.appendChild(document.createTextNode(newItem));
   //delete button
   const deleteBtn = document.createElement('button');
   //innerHTML
   deleteBtn.innerHTML = 'x';
   //btn className
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   //append deletebtn
   li.appendChild(deleteBtn);
   //append to itemList
   itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
    	if (confirm('Are you sure?')) {
    		const li = e.target.parentElement;
    		itemList.removeChild(li);
    	}
    }
}

function filterItem(e) {
   const text = e.target.value.toLowerCase();
   const items = itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item) {
   	const itemName = item.firstChild.textContent;
   	if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
   		item.style.display = "block";
   	} else {
   		item.style.display = "none";
   	}
   })
}


