const bookmarkInput = document.getElementById("bookmarkInput");
const bookmarkList = document.getElementById("bookmarkList");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
function createEl(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    if (tag === "a") node.href = text;
    return node;
  }
addBookmarkBtn.addEventListener("click", onAddBookmarkBtnClick);

function onAddBookmarkBtnClick(e) {
  const bookmarkItem = createEl("li", "bookmarkItem", "");
  const removeBtn = createEl("button", "remove", "X");
    const bookmarkLink = createEl("a", "bookmarkLink", bookmarkInput.value);
    bookmarkItem.append(bookmarkLink, removeBtn)
    bookmarkList.append(bookmarkItem)
}

bookmarkList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }
});