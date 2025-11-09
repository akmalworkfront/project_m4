fetch('js/characters.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      document.querySelector('.characters-list').innerHTML +=
        `
          <div class="character-card">
            <div class="character-photo">
              <img src="${element.person_photo}" alt="${element.name}">
            </div>
            <h3 class="character-name">${element.name}, <br> возраст: ${element.age}</h3>
            <p class="character-desc">${element.short_desc}</p>

          </div>
        `
    });
  }).catch(error => console.error('Ошибка:', error));