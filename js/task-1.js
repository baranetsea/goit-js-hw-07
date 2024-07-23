const categoryList = document.querySelectorAll(".item");

console.log(`number of category: ${categoryList.length}`);

categoryList.forEach((x) => {
  const categoryListItem = document.querySelector(".item");
  const categoryListItemEl = x.querySelectorAll("ul li");
  console.log(`category: ${x.firstElementChild.textContent}`);
  console.log(`elements ${categoryListItemEl.length}`);
});
