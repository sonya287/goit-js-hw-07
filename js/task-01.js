const categoriesEl = document.querySelectorAll("#categories .item");
console.log(`'У списку ${categoriesEl.length} категорії.'`);

const getCategory = category => {
    const categoryTitleEl = category.querySelector(".item h2");
    const categoryTitleContent = categoryTitleEl.textContent;

    const elsOfCategory = category.querySelectorAll("li");
    const countElsOfCategory = elsOfCategory.length;

    return `- Категорія: ${categoryTitleContent}
- Кількість елементів: ${countElsOfCategory}`;
};
    
categoriesEl.forEach(category => console.log(getCategory(category)));

