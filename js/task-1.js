const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories; ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryTitleItems = item.querySelectorAll('ul li');
  const categoryTitleItemsNumber = categoryTitleItems.length;

  console.log(
    `Category: ${categoryTitle}\nElements: ${categoryTitleItemsNumber}`,
  );
});
