const bookForm = document.getElementById("bookForm");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookList = document.getElementById("bookList");
const emptyMessage = document.getElementById("emptyMessage");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();

  if (!title || !author) {
    return;
  }

  const item = document.createElement("li");
  const details = document.createElement("span");
  details.textContent = `${title} — by ${author}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.addEventListener("click", function () {
    item.remove();
    updateEmptyMessage();
  });

  item.append(details, deleteButton);
  bookList.appendChild(item);

  bookTitle.value = "";
  bookAuthor.value = "";
  bookTitle.focus();
  updateEmptyMessage();
});

function updateEmptyMessage() {
  emptyMessage.hidden = bookList.children.length > 0;
}

updateEmptyMessage();
// Library book management functionality
// Library book management functionality

// Incorrect change for Git reset demonstration
