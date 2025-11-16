const btns = document.querySelectorAll('.inner_card_switcher .btn');
const card = document.querySelector('.card');

let todos = [];
let posts = [];
let index = 0;

const init = async () => {
  try {
    const todosGet = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!todosGet.ok) throw new Error(`Ошибка: ${todosGet.status}`);
    const postsGet = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!postsGet.ok) throw new Error(`Ошибка: ${postsGet.status}`);

    todos = await todosGet.json();
    posts = await postsGet.json();
    showCard(index);

  } catch (e) {
    console.log("Ошибка:", e);
  }
};

const showCard = (i) => {
  card.innerHTML = `
    <p>Card order: ${i + 1}</p>
    <p>user Id: ${todos[i].userId}</p>
    <p>${todos[i].title}</p>
    <p>${todos[i].completed}</p>
  `;
};

init().then(() => {
  console.log('Данные постов:', posts)
  btns.forEach(btn => {
    btn.onclick = (e) => {
      if (e.target.id === "btn-prev") {
        index--;
        if (index < 0) index = todos.length - 1;
        showCard(index);
      }

      if (e.target.id === "btn-next") {
        index++;
        if (index >= todos.length) index = 0;
        showCard(index);
      }
    };
  });
});





